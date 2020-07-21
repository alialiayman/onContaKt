const chatModel = ({ name, folder }: any) => ({
  name,
  folder,
  fields: [
    { name: 'when', label: 'Date and Time', summary: 1 },
    { name: 'purpose', label: 'Purpose', summary: 2 },
    { name: 'detail', label: 'Details', summary: 3 },
  ]
})


export default chatModel;