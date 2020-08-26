import { Button, Checkbox, FormControlLabel, Grid, Link, Paper, Switch, TextField, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import useUserState from './redux/useUserState';
import { CircularProgress } from '@material-ui/core';

const SignIn: React.FC = () => {
    const { login, isError, isInProgress } = useUserState();
    const webapiKey = localStorage.getItem('webapiKey');
    const projectId = localStorage.getItem('projectId');
    const [showKeys, setShowKeys] = useState(!(webapiKey && projectId));

    return (
        <React.Fragment>
            <Grid container spacing={1} style={{ margin: '50px auto', height: '90vh', width: '100%' }}>
                <Grid item xs={6} style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }} >
                    <img src="https://cdn.pixabay.com/photo/2020/02/17/18/12/office-4857268_960_720.jpg" alt="sign in slogan" width="100%" height="auto" />
                </Grid>
                <Grid item xs={6} style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Formik
                        initialValues={{ webapiKey, projectId, email: 'ayali@hotmail.com', password: 'paris123' }}
                        onSubmit={(values, actions) => {
                            if (values.webapiKey) {
                                localStorage.setItem('webapiKey', values.webapiKey);
                            }
                            if (values.projectId) {
                                localStorage.setItem('projectId', values.projectId);
                            }
                            login(values);
                        }}>
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                            <Paper elevation={3} style={{ backgroundColor: 'hsl(240,100%,99%)', color: 'hsl(240,100%,20%)', width: '80%' }}>
                                <Form >
                                    <Typography variant="h4" style={{ marginTop: '20px' }}>Login</Typography>
                                    <Typography variant="subtitle1">Please login to your firebase database</Typography>
                                    <div>
                                        <Grid container direction="column" spacing={2} style={{ padding: '1rem' }}>

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


                                            <Grid container alignItems="center" >
                                                <Grid item xs={8}>
                                                    {showKeys &&
                                                        <React.Fragment>
                                                            <Grid item xs={12}>
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
                                                            <Grid item xs={12}>
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
                                                        </React.Fragment>
                                                    }
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <FormControlLabel
                                                        control={<Switch checked={showKeys} onChange={() => setShowKeys(k => !k)} />}
                                                        label="Firebase keys"
                                                    />
                                                </Grid>
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
                                        <Button type="submit" variant="contained" color="primary" startIcon={isInProgress ? <CircularProgress color="inherit" size={15} thickness={8} /> : <HttpsOutlinedIcon />}>Login</Button>
                                    </div>
                                </Form>
                            </Paper>
                        }
                    </Formik>
                </Grid>
            </Grid>

            <Snackbar open={isError} autoHideDuration={6000} message="Firebase: login failed, please check and try again!" />

        </React.Fragment >
    )
};

export default SignIn;