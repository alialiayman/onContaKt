import React from 'react'
import { Typography, Grid, Paper } from '@material-ui/core'


const MainFeature = () => {

    return (
        <div style={{ backgroundColor: 'snow', padding: '1rem' }}>
            <Typography variant="h5" gutterBottom={true}>Read machine and visual parts of passports</Typography>

            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Typography color="textPrimary" gutterBottom={true}>

                        HajOnSoft will read the MRZ area as well as the visual area!
                            </Typography>

                    <Paper   elevation={1} style={{height: '80%'}} >

                        <Typography >
                            Read place of birth from visual area

                        </Typography>
                        <Typography>

                            Read place of issue from visual area
                        </Typography>

                        <Typography>

                            Read or calculate mahram name and relationship
                        </Typography>
                        <Typography>

                            Download chip/visual high quality person photo
                        </Typography>

                        <Typography>

                            You will save hours of typing because we can read any thing in the visual area of the passport identification page
                        </Typography>


                    </Paper>

                    <Typography>

                        Keep reading to find out why HajOnSoft is The best Scanning Software in the world ...
                    </Typography>


                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{ padding: '1rem' }}>

                        <img src="http://hajonsoft.com/images/MrzAndnonMrz.jpg" alt="passport" style={{ width: '100%', height: 'auto' }}></img>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )

}


export default MainFeature;