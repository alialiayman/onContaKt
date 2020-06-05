import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';


const SignIn: React.FC = () => {
    return (
        <React.Fragment>
            <Paper elevation={10} style={{ margin: '80px auto', height: '150vh', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography component="p" color="primary" variant="h2" >Welcome</Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="p" variant="h3" color="textSecondary" >
                            Sign in Page here
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
};

export default SignIn;