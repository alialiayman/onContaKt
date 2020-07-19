import { Grid, makeStyles, Paper, Slide, Typography, Zoom } from '@material-ui/core';
import React from 'react';

const config = {
    title: 'Manage your HAJJ & Umrah business',
    subtitle: 'HajOnSoft is a management software which will allow you to ...',
    items: [
        { img: '/images/passport-reader.png', title: 'Use passport readers', content: 'to read machine and visual passport information including the personal photo. We support 3M, AccessIS, ARH and Superma readers.' },
        { img: '/images/ministry-of-hajj.png', title: 'Apply for visa', content: 'Photo resizes automatically and you Keep a local copy of your customers.' },
        { img: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', title: 'Assign Rooms', content: 'based on requests, Age, Nationality and mahram information. Send to customers and hotels.' },
        { img: '/images/ministry-of-hajj.png', title: 'Print IDs', content: 'bracelets, luggage tags, room labels, Hajj/Umrah applications, flight reports and passport stickers' },
    ]
}

const useStyles = makeStyles((theme) => ({
    subtitleText: {
        color: theme.palette.primary.main,
    }
}));

const Features = ({model}: any) => {
    const classes = useStyles();
    return (
        <React.Fragment >
            <div style={{width: '100%'}}>
                <Slide direction="right" in={true} timeout={500}>
                    <Typography variant="h3">{config.title}</Typography>
                </Slide>
                <Zoom in={true} timeout={1000}>

    <Typography variant="h4" >{config.subtitle}</Typography>
                </Zoom>
                <Grid container justify="space-between" spacing={1} style={{ padding: '20px'}}>
                    {config.items.map(i =>
                        <Grid item xs={3} >
                            <Slide direction="left" in={true} timeout={500}>
                                <Paper elevation={5} style={{ height: '300px', margin: '0 auto', padding: '20px' }}>
                                    <img src={i.img} alt={i.title} style={{ width: '128px', height: '128px', borderRadius: '50%', marginBottom: '20px' }}></img>
                                    <Typography variant="h6">{i.title}</Typography>
                                    <Typography>{i.content}</Typography>
                                </Paper>
                            </Slide>
                        </Grid>
                    )}
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Features
