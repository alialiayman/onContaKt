import moment from 'moment';

const chatModel: any = ({ name, folder }: any) => ({
  name,
  actions: [
    'back'
  ],
  folder,
  fields: [
    { name: 'when', label: 'Date and Time', summary: 1, defaultValue: moment().format('dddd DD MMM YYYY hh:mm a'), readonly: true },
    { name: 'purpose', label: 'Purpose', summary: 2, autoFocus: true },
    { name: 'detail', label: 'Details', type: 'textarea', summary: 3},
  ]
})

export default chatModel;