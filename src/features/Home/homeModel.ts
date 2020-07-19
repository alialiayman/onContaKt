const homeModel : BusinessContent= 
    {
        key: 'hajonsoft',
        title: 'welcome to hajonsoft 2020 with nly few days left to almwaled al nawawi on ',
        subtitle: 'previous event was israa wi mirag - scroll events',
        sections: [
            {
                key: 'features',
                title: 'are you ready for it',
                subtitle: 'it will save you money',
                sections: [
                    {
                        key: 'feature1',
                        imageSrc: 'kaaba',
                        title: 'scan passports',
                        subtitle: 'scan good',
                        body: 'some bla bla bla'

                    }
                ]
            },
            {
                key: 'features',
                title: 'are you ready for it',
                subtitle: 'it will save you money',
                sections: [
                    {
                        key: 'feature1',
                        imageSrc: 'kaaba',
                        title: 'scan passports',
                        subtitle: 'scan good',
                        body: 'some bla bla bla'

                    }
                ]
            }
        ]

    }


export default homeModel;

interface BusinessContent {
    key: string;
    title?: string;
    subtitle?: string;
    imageSrc?: string;
    body?: string;
    footer?: string;
    sections?: BusinessContent[]
}