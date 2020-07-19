import React from 'react'
import Features from './components/Features';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Downloads from './components/Downloads';
import Contact from './components/Contact';


const BusinessContent = ({model}: any)=> {

    return (
        <React.Fragment>
            <section id={model.key}></section>
            {model.key === 'features' && <Features model={model}/> }
            {model.key === 'pricing' && <Pricing model={model}/>}
            {model.key === 'demo' && <Demo model={model}/>}
            {model.key === 'downloads' && <Downloads model={model}/>}
            {model.key === 'contact' && <Contact model={model}/>}
        </React.Fragment>
    )
}

export default BusinessContent;