import React from 'react'


const Demo = ({ model }: any) => {

    return (
    <pre>welcome {JSON.stringify(model,null,2)}</pre>
    )
}

export default Demo;