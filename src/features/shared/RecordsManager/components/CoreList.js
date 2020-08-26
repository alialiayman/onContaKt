import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import DetailsIcon from '@material-ui/icons/Details';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import Remove from '@material-ui/icons/Remove';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import ViewColumn from '@material-ui/icons/ViewColumn';
import _ from 'lodash';
import MaterialTable, { MTableToolbar } from 'material-table';
import React, { forwardRef } from 'react';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  MoreDetails: forwardRef((props, ref) => <DetailsIcon {...props} ref={ref} />),
  Chat: forwardRef((props, ref) => <PermPhoneMsgOutlinedIcon {...props} ref={ref} />),
  Back: forwardRef((props, ref) => <ReplayOutlinedIcon {...props} ref={ref} />),

};


const CoreList = ({ model, records, onAdd, onDelete, onUpdate, onModelChange }) => {
  const summaryColumns = _.filter(model.fields, (f) => !!f.summary);
  const sortedSummaryColumns = _.orderBy(summaryColumns, ['summary', ['asc']]).map(r => { return { title: r.label, field: r.name } });

  return (
    <React.Fragment>
      <MaterialTable
        components={{
          Toolbar: props => (
            <div >
              {model.actions && model.actions.some(a => a === "back") &&
                <Button color="secondary" variant="outlined" onClick={() => onModelChange({ rowdata: '', source: 'back' })} startIcon={<ReplayOutlinedIcon></ReplayOutlinedIcon>}>Back</Button>
              }

              <MTableToolbar {...props} />
            </div>
          ),
        }}
        icons={tableIcons}
        title={model.pluralName}
        columns={sortedSummaryColumns}
        data={records}
        actions={[
          {
            icon: tableIcons.Add,
            tooltip: 'Add ' + model.name,
            isFreeAction: true,
            onClick: (event) => onAdd()
          },
          {
            icon: () => <tableIcons.Edit color="action" />,
            tooltip: 'Edit ' + model.name,
            onClick: (event, rowData) => {
              onUpdate(rowData);
            }
          },
          {
            icon: () => (model.actions.includes('chat') && <tableIcons.Chat color="action" />),
            tooltip: 'chat ' + model.name,
            onClick: (event, rowData) => {
              onModelChange(rowData);
            }
          },
          {
            icon: () => <tableIcons.Delete color="error" />,
            tooltip: 'Delete ' + model.name,
            onClick: (event, rowData) => {
              onDelete(rowData);
            }
          }
        ]}
        detailPanel={[
          {
            tooltip: 'chat',
            render: rowData => {
              return (
                <div>
                  {JSON.stringify(rowData)}
                </div>
              )
            },
          }
        ]}
        options={{
          actionsColumnIndex: -1,
          grouping: false,
          pageSize: 10,
          exportButton: true,
        }}
        localization={{
          body: {
            emptyDataSourceMessage: `No ${model.name}s to display, import or add ${model.name}s by clicking the plus sign above.`,
          },
        }}
      />
    </React.Fragment>
  );
}

export default CoreList;

