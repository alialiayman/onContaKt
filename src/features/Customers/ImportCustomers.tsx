import { Button, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import _ from 'lodash';
import React, { useState } from 'react';
import firebaseService from '../shared/RecordsManager/redux/firebaseService';
import useUserState from '../SignIn/redux/useUserState';
import customerModel from './customerModel';

const customerTransform = (transformed: any, original: any) => {

    transformed.address = `${original.address}, ${original.city}  ${original.companystate} ${original.zipcode} ${original.nationality}`.trim();
    transformed.imported = new Date();
    return transformed;
}
const ImportCustomers = () => {
    const {  projectId, user } = useUserState();
    const [createError, setCreateError] = useState(false);
    const [importSuccess] = useState(false);

    // const handleImport = async () => {
    //     const rows = importText.split('\n');
    //     for (let i = 0; i < rows.length; i++) {
    //         let regex = /(\w*?)\s(\w*)/g;
    //         let [, name, type] = regex.exec(rows[i]) || [];
    //         if (name) {
    //             let newRecord = { initialInputRecord };
    //             newRecord.name = name.substring(0, 1).toLowerCase() + name.substring(1);
    //             newRecord.label = name;
    //             newRecord.type = convertToFirebaseType(type);
    //             svc.createRecord(user, projectId, model.name, newRecord);
    //         }
    //     }
    //     SetState({ ...state, importDMLOpen: false });
    //     // onAdded({ ...newRecord});
    // }


    // function convertToFirebaseType(typ) {
    //     const _typ = typ.toLowerCase();
    //     if (_typ.includes('int')) return 'number';
    //     if (_typ.includes('bit')) return 'checkbox';

    //     return 'text'

    // }
    const svc = firebaseService();

    const handleImport = async (isShallowImport: boolean) => {
        try {
            const importUrl = 'http://localhost:3000/api/HajCompanies?filter=%7B%22where%22%3A%20%7B%22parentcompanyid%22%3A%20null%7D%7D'
            const response = await svc.getExternalResponse(importUrl);

            if (response && response.data) {
                const importRecords = response.data;

                importRecords.forEach((r: any) => {
                    setTimeout(() => {
                        let newImport: any = {};
                        const importedKeys = Object.keys(r);
                        if (isShallowImport) {
                            importedKeys.forEach(ik => {
                                const normalizedKey = ik.replace('_', '').toLowerCase();
                                //Find this normalizedKey in the definition
                                const matchingKey = _.find(customerModel.fields, (f: any) => f.name.toLowerCase() === normalizedKey);
                                if (matchingKey && matchingKey.name) {
                                    if (matchingKey.type === 'date') {
                                        newImport[matchingKey.name] = (new Date(r[ik]).toISOString().substring(0, 10));
                                    } else {
                                        newImport[matchingKey.name] = r[ik];
                                    }
                                }
                            })
                        } else {
                            newImport = r;
                        }
                        newImport = customerTransform(newImport, r);
                        svc.createRecord(user, projectId, customerModel.name, newImport);
                    }, 2000)
                });
            }

        } catch (err) {
            setCreateError(true);

        }
    };


    return (
        <React.Fragment>
            <TextField label="url" value="http://localhost:3000/api/HajCompanies?filter=%7B%22where%22%3A%20%7B%22parentcompanyid%22%3A%20null%7D%7D"></TextField>
            <TextField label="describe table output" fullWidth multiline rows="10" variant='outlined'>

            </TextField>
            <Button color="secondary" variant="contained" onClick={() => handleImport(false)}>
                Import all fields
                    </Button>
            <Button color="primary" variant="contained" onClick={() => handleImport(true)}>
                Import model only
            </Button>

            <Snackbar open={createError} autoHideDuration={6000} >
                <Alert severity="error">
                    Error importing customers
                </Alert>
            </Snackbar>

            <Snackbar open={importSuccess} autoHideDuration={6000} >
                <Alert severity="success">
                    Importing customers ...
                </Alert>
            </Snackbar>
        </React.Fragment>
    )
}

export default ImportCustomers;