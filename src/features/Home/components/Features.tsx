import React from 'react'
import { Typography, Grid, Fade, Collapse, Grow, Paper, Slide, Zoom, Button, makeStyles, Container } from '@material-ui/core';
import { BrowserRouter as Router}  from 'react-router-dom' ;
import { HashLink as Link } from 'react-router-hash-link';
const config = {
    items: [
        { img: 'https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', title: 'Use passport readers', content: 'to read machine and visual passport information including the personal photo. We support 3M, AccessIS, ARH and Superma readers.' },
        { img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', title: 'Submit To MOFA', content: 'Photo resizes automatically and you Keep a local copy of your customers.' },
        { img: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', title: 'Assign Rooms', content: 'based on requests, Age, Nationality and mahram information. Send to customers and hotels.' },
        { img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', title: 'Print IDs', content: 'bracelets, luggage tags, room labels, Hajj/Umrah applications, flight reports and passport stickers' },
    ]
}

const useStyles = makeStyles((theme) => ({
    subtitleText: {
        color: theme.palette.primary.main,
    }
}));

const Features = () => {
    const classes = useStyles();
    return (
        <React.Fragment >
            <Container>
                <Slide direction="right" in={true} timeout={500}>
                    <Typography variant="h3">Manage your HAJJ & Umrah business effortlessly</Typography>
                </Slide>
                <Grow in={true} timeout={3000}>

                    <Typography variant="body1" >HajOnSoft is a complete Hajj, Umrah & Enjaz management software designed by Hajj, Umrah & Enjaz professionals. It has been extensively field tested and will allow you to...</Typography>
                </Grow>
                <Grid container justify="space-around" spacing={3} style={{ clear: 'both', width: '90%', margin: '20px auto 0 auto' }}>
                    {config.items.map(i =>

                        <Grid item xs={3} >
                            <Slide direction="left" in={true} timeout={500}>
                                <Paper elevation={5} style={{ height: '400px', width: '95%', margin: '0 auto', paddingTop: '20px' }}>
                                    <img src={i.img} alt={i.title} style={{ width: '128px', height: '128px', borderRadius: '50%', marginBottom: '20px' }}></img>
                                    <Typography variant="h6">{i.title}</Typography>
                                    <Typography>{i.content}</Typography>
                                </Paper>
                            </Slide>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Features
