import React from 'react'
import { Typography, Grid } from '@material-ui/core'


const MainFeature = () => {

    return (
        <div>
            <Typography variant="h5">Read machine and visual parts of passports</Typography>

            <Grid container spacing={10}>
                <Grid item xs={6}>
                    HajOnSoft realize the need to read the visual area of the passport identification page as well as the machine readable area.

<ul>
                        <li>

                            Read place of birth from visual area
    </li>

                        <li>
                            Read place of issue from visual area
                    </li>
                        <li>
                            Read or calculate mahram name and relationship
                    </li>
                        <li>
                            Download chip/visual high quality person photo
                    </li>
                        <li>
                            You will save hours of typing because we can read any thing in the visual area of the passport identification page
                    </li>

                        <li>
                            Keep reading to find out why HajOnSoft is The best Scanning Software in the world ...
                    </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <img src="http://hajonsoft.com/images/MrzAndnonMrz.jpg" alt="passport" style={{ width: '100%', height: 'auto' }}></img>
                </Grid>
            </Grid>
        </div>
    )

}


export default MainFeature;