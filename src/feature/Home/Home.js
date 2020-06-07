import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AutoRotatingCarousel from '../common/Carousel/AutoRotatingCarousel';
import backGround from '../../assets/images/bg-art.jpg'
import Slide from '../common/Carousel/Slide';

//const Slide = require('./Slide').default;



const Home = () => {
    let param = useParams();
    const [state, setState] = useState({ open: true });


    return (
        <React.Fragment >
            <div style={{ margin: '50px auto',  width: '100%', backgroundImage:backGround}}>


            <AutoRotatingCarousel
                label="Register Now"
                open={true}
                autoplay={false}
                onStart={()=> alert('hi')}
                style={ {backgroundImage:backGround}}
            >
                <Slide
                    media={
                        <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
                    }
                    mediaBackgroundStyle={{ backgroundImage:backGround }}
                    style={{ backgroundImage:backGround}}
                    title="One"
                    subtitle="Just using this will blow your mind."
                />
                <Slide
                    media={
                        <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: 'skyBlue' }}
                    style={{ backgroundColor: 'navy' }}
                    title="Two"
                    subtitle="Well just mix two colors and your are good to go!"
                />
                <Slide
                    media={
                        <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: 'olive' }}
                    style={{ backgroundColor: 'green' }}
                    title="Three"
                    subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
                />
            </AutoRotatingCarousel>

           </div>
        </React.Fragment >
    )
};

export default Home;