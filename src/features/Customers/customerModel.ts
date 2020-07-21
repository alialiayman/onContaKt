const customerModel = {
  name: 'customer',
  folder: 'customer',
  fields: [
    { name: 'name', label: 'Name', summary: 1 },
    { name: 'contactperson', label: 'Contact person', summary: 2 },
    { name: 'email', type: 'email', summary: 2 },
    { name: 'createdt', type: 'date' },
    { name: 'expiredate', label: 'Expires', type: 'date' },
    { name: 'logourl' },
    { name: 'tel' },
    { name: 'address' },
    { name: 'website' },
    { name: 'companyid' },
    { name: 'comments', type: 'textarea' },
  ]
}


export default customerModel;