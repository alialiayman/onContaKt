import React, { useState } from 'react';
import { Typography, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Container, Card, CardContent, TextField, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
    const history = useHistory();


    return (
        <React.Fragment>

            <Grid container spacing={1} style={{ margin: '50px auto', height: '90vh', width: '100%' }}>
                <Grid item xs={6} style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }} >

                    <img src="https://cdn.pixabay.com/photo/2020/02/17/18/12/office-4857268_960_720.jpg" alt="sign in slogan" width="100%" height="auto" />

                </Grid>
                <Grid item xs={6} style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper elevation={3} style={{ width: '90%', height: '50%' }}>
                        <Typography variant="h2" style={{marginTop: '20px'}}>Login</Typography>
                        <Typography variant="subtitle1">Please login to your account</Typography>

                        <div>
                            <Grid container direction="column" style={{ padding: '2rem' }}>

                                <TextField label="User name"></TextField>
                                <TextField label="Web key"></TextField>
                                <TextField label="Password" type="Password"></TextField>

                                <Grid container justify="space-between" >

                                    <FormControlLabel 
                                        control={<Checkbox />} label="Remember me" />

                                    <Link href="#" color="secondary" style={{ paddingTop: '10px'}}>Forgot password?</Link>
                                </Grid>

                            </Grid>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
                            <Button variant="contained" color="primary">Login</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>


        </React.Fragment >
    )
};

export default SignIn;