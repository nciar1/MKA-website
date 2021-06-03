import React, {useState} from 'react';
import Video from '../../video/MK Brand Banner.mp4';
import {HeroContainer,HeroBg,VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';



const HeroSection = () => {

const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer id ="about">
            <HeroBg>
                <VideoBg src = {Video} type = 'video/mp4' autoPlay loop muted/>
            </HeroBg >
       
            
        </HeroContainer>
    );
};

export default HeroSection;
