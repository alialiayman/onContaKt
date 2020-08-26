import React, { useState } from 'react';
import RecordsManager from '../shared/RecordsManager/RecordsManager';
import chatModel from './chatModel';
import customerModel from './customerModel';
import { withRouter } from 'react-router-dom';


const ProspectCustomers = () => {

    const [model, setModel] = useState(customerModel);

    const dummy = () => { }

    const handleModelChange = ({ rowdata, source, index }: any) => {
        if (model.name === 'Customer' && source === 'actions' && index === 0) {
            const customerChatmodel = chatModel({ name: `Chat ${customerModel.name} ${rowdata.name}`, folder: `chat${rowdata.firebaseId}` });
            setModel(customerChatmodel);
        } else if (source === 'back') {
            setModel(customerModel);
        }

    }

    return (
        <div style={{ padding: '1rem' }}>
            <RecordsManager initialMode={0} model={model} onModelChange={handleModelChange} onRecordAdded={dummy} onRecordDeleted={dummy} onRecordUpated={dummy} />
        </div>

    )
}

export default withRouter(ProspectCustomers);