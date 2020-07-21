import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Formik } from 'formik';
import React from 'react';
import useUserState from '../../../SignIn/redux/useUserState';
import firebaseService from '../redux/firebaseService';
import CoreField from './CoreField';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: '90%',
        margin: '25px auto',
    },
    cardTitle: {
        textAlign: 'left',
        fontSize: '2em',
        backgroundColor: 'silver',
    },
    actionsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'silver',
    },
    actionsContainerTopMain: {
        width: '50%',
        padding: '10px',
    },
    actionsContainerTopButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

const CoreForm = ({ mode, model, initialInputRecord, onAdded, onUpdated, onDeleted, onCancelled }) => {

    const classes = useStyles();
    const svc = firebaseService();
    const title = (mode) => {
        switch (mode) {
            case 1:
                return 'Create ' + model.name;
            case 2:
                return 'Delete ' + model.name;
            case 3:
                return 'Update ' + model.name;
            default:
                break;
        }
    }
    const { projectId, user } = useUserState();


    // const handleImageChange = ()=> {
    //     // TODO: when image changes store it to the database using the record key and its field name
    // }


    return (
        <React.Fragment>
            <Formik
                initialValues={initialInputRecord}
                onSubmit={async (values, { setSubmitting }) => {
                    const newRecord = {};
                    model.fields.forEach(f => newRecord[f.name] = values[f.name]);
                    if (mode === 1) {
                        const result = await svc.createRecord(user, projectId, model.folder, newRecord);
                        onAdded({ ...values, firebaseId: result.data.name });
                    } else if (mode === 2) {
                        await svc.deleteRecord(user, projectId, model.folder, initialInputRecord.firebaseId);
                        onDeleted(values);
                    } else if (mode === 3) {
                        await svc.updateRecord(user, projectId, model.folder, initialInputRecord.firebaseId, newRecord);
                        onUpdated(values);
                    }
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form onSubmit={handleSubmit} >
                            <Card raised className={classes.formContainer}>
                                <CardHeader className={classes.cardTitle}
                                    title={title(mode)}
                                    subheader={`${values.firebaseId}` || ''}
                                    action={
                                        <CancelOutlinedIcon color='secondary' onClick={onCancelled} />
                                    }
                                />
                                <CardContent>
                                    <Grid container spacing={3}>
                                        {model.fields.map(f => <CoreField key={f.name} field={f} value={values[f.name]} mode={mode} onChange={handleChange} onBlur={handleBlur} />)}
                                    </Grid>

                                </CardContent>
                                <CardActions >
                                    <Grid container spacing={2} justify="flex-end">
                                        <Grid item>
                                            <Button type="button" disabled={isSubmitting} variant="contained" color='secondary' onClick={onCancelled} startIcon={<CancelOutlinedIcon />}>Cancel</Button>
                                        </Grid>
                                        <Grid item>
                                            {(mode === 1) && <Button type="submit" disabled={isSubmitting} variant="contained" color='primary' startIcon={<AddOutlinedIcon />}>Create</Button>}


                                            {(mode === 2) && <Button type="submit" disabled={isSubmitting} variant="contained" color='secondary' startIcon={<DeleteOutlinedIcon />}>Delete</Button>}


                                            {(mode === 3) && <Button type="submit" disabled={isSubmitting} variant="contained" color='primary' startIcon={<SaveOutlinedIcon />}>Save</Button>}
                                        </Grid>
                                    </Grid>

                                </CardActions>
                            </Card>
                        </form>
                    )}

            </Formik>
        </React.Fragment>
    )
}


export default CoreForm;