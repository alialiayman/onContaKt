const customerModel: any = {
  name: 'customer',
  folder: 'customer',
  actions: [
    'chat'
  ],
  fields: [
    { name: 'name', label: 'Name', summary: 1 },
    { name: 'contactperson', label: 'Contact person', summary: 2 },
    { name: 'email', type: 'email', summary: 2 },
    { name: 'createdt', type: 'date' },
    { name: 'expiredate', label: 'Expires', type: 'date' },
    { name: 'confirmed', label: 'Confirmed', type: 'checkbox', pathFilter: 'confirmed' },
    { name: 'archived', label: 'Archived', type: 'checkbox', pathFilter: 'archived'  },
    { name: 'favorite', label: 'Favorite', type: 'checkbox', pathFilter: 'favorite'  },
    { name: 'logourl' },
    { name: 'tel' },
    { name: 'address' },
    { name: 'website' },
    { name: 'companyid' },
    { name: 'comments', type: 'textarea' },
  ]
}


export default customerModel;