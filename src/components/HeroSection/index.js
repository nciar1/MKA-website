import React, {useState} from 'react';
import {HeroContainer,HeroBg,VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';



const HeroSection = () => {

const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer id ="about">
            <HeroBg>
                Hello
            </HeroBg >
       
            
        </HeroContainer>
    );
};

export default HeroSection;
