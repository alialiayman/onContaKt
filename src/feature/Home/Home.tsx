import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';


const Home: React.FC = () => {
    let { id } = useParams();
    return (
        <React.Fragment>
            <Grid container direction="column">
                <Grid item>
                    <Typography component="p" color="primary" variant="h2" >Welcome</Typography>
                </Grid>
                <Grid item>
                    <Typography component="p" variant="h3" color="textSecondary" >
                        {id}
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default Home;