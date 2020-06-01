import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';


const Home: React.FC = () => {
    let location = useLocation();
    return (
        <React.Fragment>
            <Grid container direction="column">
                <Grid item>
                    <Typography component="p" color="primary" variant="h2" >Welcome</Typography>
                </Grid>
                <Grid item>
                    <Typography component="p" variant="h3" color="textSecondary" >
                        {location}
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default Home;