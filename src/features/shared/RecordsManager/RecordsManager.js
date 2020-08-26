import _ from 'lodash';
import pluralize from 'pluralize';
import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import useUserState from '../../SignIn/redux/useUserState';
import CoreForm from './components/CoreForm';
import CoreList from './components/CoreList';
import useRecordManagerState from './redux/useRecordManagerState';


const RecordsManager = ({ model, initialMode, onModelChange, onRecordAdded, onRecordDeleted, onRecordUpated, match }) => {
    const [state, setState] = useState({
        records: [],
        selectedRecord: {},
        mode: initialMode,
    });
    model = touchModel(model);
    const { projectId, user } = useUserState();
    const { load, data } = useRecordManagerState(model);
    const emptyRecord = establishEmptyRecord(model);

    useEffect(() => {
        if (!data || data.length === 0) {
            model.projectId = projectId;
            model.user = user;
            load(model);
        }

    }, [model]);

    if (!model) {
        return null;
    }
    const handleOnAdded = (newRecord) => {
        setState({ ...state, mode: 0, records: [...state.records, newRecord] });
        onRecordAdded(newRecord);
    };

    const handleOnUpdate = (updateRecord) => {
        setState({ ...state, mode: 3, selectedRecord: updateRecord });
    };
    const handleOnUpdated = (updatedRecord) => {
        const updatedRecords = state.records.map(c => c.firebaseId === updatedRecord.firebaseId ? updatedRecord : c);
        setState({ ...state, mode: 0, records: updatedRecords });
        onRecordUpated(updatedRecord);
    };
    const handleOnDeleted = (deletedRecord) => {
        const remainingRecords = state.records.filter(x => x.firebaseId !== deletedRecord.firebaseId);
        setState({ ...state, mode: 0, records: remainingRecords });
        onRecordDeleted(deletedRecord);
    };
    const handleOnCancelled = () => {
        setState({ ...state, mode: 0 });
    };
    const handleOnAdd = () => {
        setState({ ...state, mode: 1, selectedRecord: emptyRecord });
    };
    const handleOnDelete = (deleteRecord) => {
        setState({ ...state, mode: 2, selectedRecord: deleteRecord });
    };
    const handleOnDetails = (rowdata) => {
        setState(prev => ({ ...prev, records: [], selectedRecord: {} }));
        onModelChange({ rowdata, source: 'actions', index: 0 });
    }


    return (
        <React.Fragment>
            {
                state.mode ?
                    <CoreForm
                        mode={state.mode}
                        model={model}
                        initialInputRecord={state.selectedRecord}
                        onAdded={handleOnAdded}
                        onDeleted={handleOnDeleted}
                        onUpdated={handleOnUpdated}
                        onCancelled={handleOnCancelled}
                    /> :
                    <CoreList
                        model={model}
                        records={data}
                        onAdd={handleOnAdd}
                        onDelete={handleOnDelete}
                        onUpdate={handleOnUpdate}
                        onModelChange={handleOnDetails}
                    />
            }
        </React.Fragment >
    )
}

function establishEmptyRecord(model) {
    const output = {};
    if (model && model.fields) {
        model.fields.forEach(element => {
            output[element.name] = element.defaultValue;
        });
    }
    return output;
}

function touchModel(model) {
    if (!model || !model.name || !model.fields || !model.folder) return null;
    if (model.processed) return model;
    model.name = model.name[0].toUpperCase() + model.name.toLowerCase().substring(1);
    model.pluralName = pluralize(model.name);
    if (model.sqlFields) {
        if (!model.fields) model.fields = [];
        const fields = model.sqlFields.split('\n');
        fields.forEach(sf => {
            const fieldParts = sf.replace(/ /g, '').split('\t');
            const name = fieldParts[0][0].toLowerCase() + fieldParts[0].substring(1);
            const label = fieldParts[0];
            let type = '';
            if (fieldParts[1].includes('char')) {
                type = 'text';
            } else if (fieldParts[1].includes('bit')) {
                type = 'checkbox';
            } else if (fieldParts[1].includes('datetime')) {
                type = 'date';
            } else if (fieldParts[1].includes('int')) {
                type = 'number';
            } else if (fieldParts[1].includes('money')) {
                type = 'number';
            } else if (fieldParts[1].includes('decimal')) {
                type = 'number';
            }

            const existingDefinitionRecord = _.find(model.fields, (f) => f.name === fieldParts[0]);
            if (existingDefinitionRecord) {
                existingDefinitionRecord.label = label;
                existingDefinitionRecord.type = type;
                existingDefinitionRecord.name = name;
            } else {
                model.fields.push({
                    name,
                    label,
                    type
                })
            }

        });
    }

    // reassure all fields have type, label, summary, default value and readonly flag
    model.fields = model.fields.map(f => {
        const label = (f.label || (f.name[0].toUpperCase() + f.name.substring(1)));
        const type = (f.type || 'text');
        const summary = f.summary || 0;
        const defaultValue = f.defaultValue || '';
        const readonly = f.readonly || false;
        return {
            ...f,
            label,
            type,
            summary,
            readonly,
            defaultValue,
        };
    });

    // reassure least one summary column
    if (!model.fields.some(s => s.summary)) {
        model.fields[0].summary = 1;
    }
    // reassure least one autofocus column
    if (!model.fields.some(s => s.autoFocus)) {
        model.fields[0].autoFocus = true;
    }

    model.processed = true;
    return model;
}

const withRouterRecordsManager = withRouter(RecordsManager);

export { touchModel, withRouterRecordsManager as default };
