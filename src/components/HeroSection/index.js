import React, {useState} from 'react';
import {HeroContainer,HeroBg,VideoBg, BusinessBanner,BusinessDesc , BusinessName, Name} from './HeroElements';
import Video from '../../videos/video3.mp4'



const HeroSection = () => {

const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer id ="about">

            <HeroBg>

            <VideoBg autoPlay loop muted  playsinline src = {Video} type='video/mp4'/>

            </HeroBg >
<BusinessBanner className='cream-bg'>
    <BusinessName className='falu-red'>MARILARTOON</BusinessName>
    <BusinessDesc className='old-rose'>Creative Business</BusinessDesc>
  <Name className='dark-sienna'>Marielle Kloe Alcayaga</Name>
</BusinessBanner>
        </HeroContainer>
    );
};

export default HeroSection;
