import React, { useState } from 'react';
import { Typography, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Container, Card, CardContent, TextField, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import useUserState from './redux/useUserState';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const SignIn: React.FC = () => {
    const history = useHistory();
    const { login, isLoggedIn , isError} = useUserState();
    let webapiKey = '';
    let projectId = '';
    
    const firebaseInfo = localStorage.getItem('firebase');
    if (firebaseInfo){
        const firebaseInfoObject = JSON.parse(firebaseInfo);
        webapiKey = firebaseInfoObject.webapiKey;
        projectId = firebaseInfoObject.projectId;
    }

    if (isLoggedIn){
        history.push('/home');
    }

    return (
        <React.Fragment>
            <Grid container spacing={1} style={{ margin: '50px auto', height: '90vh', width: '100%' }}>
                <Grid item xs={6} style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }} >

                    <img src="https://cdn.pixabay.com/photo/2020/02/17/18/12/office-4857268_960_720.jpg" alt="sign in slogan" width="100%" height="auto" />

                </Grid>
                <Grid item xs={6} style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Formik 
                        initialValues={{ webapiKey, username: '', password: '', projectId }}
                        onSubmit={(values, actions) => {
                            localStorage.setItem('firebase', JSON.stringify({webapiKey: values.webapiKey, projectId: values.projectId}));
                            login(values);
                        }}>
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                            <Paper elevation={3} style={{backgroundColor: 'hsl(240,100%,99%)', color: 'hsl(240,100%,20%)',  width: '80%'}}>
                                <Form >
                                    <Typography variant="h4" style={{ marginTop: '20px' }}>Login</Typography>
                                    <Typography variant="subtitle1">Please login to your account</Typography>
                                    <div>
                                        <Grid container direction="column" style={{ padding: '1rem' }}>
                                            <Grid item>

                                                <Field name="webapiKey">
                                                    {({ field }: any) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                fullWidth
                                                                type="text"
                                                                label="Firebase webApi Key"
                                                                autoFocus={true}
                                                                {...field}
                                                                autoComplete="off"
                                                            />
                                                            <ErrorMessage name="webapiKey" component="div" />
                                                        </React.Fragment>
                                                    )}
                                                </Field>
                                            </Grid>
                                            <Grid item>

                                                <Field name="projectId">
                                                    {({ field }: any) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                fullWidth
                                                                type="text"
                                                                label="Firebase projectId"
                                                                {...field}
                                                                autoComplete="off"
                                                            />
                                                            <ErrorMessage name="projectId" component="div" />
                                                        </React.Fragment>
                                                    )}
                                                </Field>
                                            </Grid>
                                            <Grid item>

                                                <Field name="email">
                                                    {({ field }: any) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                fullWidth
                                                                type="text"
                                                                label="Email"
                                                                {...field}
                                                                autoComplete="off"
                                                            />
                                                            <ErrorMessage name="email" component="div" />
                                                        </React.Fragment>
                                                    )}
                                                </Field>
                                            </Grid>
                                            <Grid item>

                                                <Field name="password">
                                                    {({ field }: any) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                fullWidth
                                                                type="password"
                                                                label="password"
                                                                {...field}
                                                                autoComplete="off"
                                                            />
                                                            <ErrorMessage name="password" component="div" />
                                                        </React.Fragment>
                                                    )}
                                                </Field>
                                            </Grid>
                                            <Grid item>

                                                <Grid container justify="space-between" >
                                                    <Grid item>

                                                        <FormControlLabel
                                                            control={<Checkbox />} label="Remember me" />
                                                    </Grid>
                                                    <Grid item>

                                                    </Grid>
                                                    <Link href="#" color="secondary" style={{ paddingTop: '10px' }}>Forgot password?</Link>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', marginBottom: '2rem' }}>
                                        <Button type="submit" variant="contained" color="primary">Login</Button>
                                    </div>
                                </Form>
                            </Paper>
                        }
                    </Formik>
                </Grid>
            </Grid>

            <Snackbar open={isError} autoHideDuration={6000} message="Firebase: login failed, please check and try again!"/>

        </React.Fragment >
    )
};

export default SignIn;