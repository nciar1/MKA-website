import {HeroContainer,HeroBg,VideoBg, BusinessBanner,BusinessDesc , BusinessName, Name} from './HeroElements';
import Video from '../../videos/video4.mp4'
import Poster from '../../images/bgBackup.png'



const HeroSection = () => {

return (
    <HeroContainer id ="about">
            <HeroBg>
                <VideoBg autoPlay loop muted poster={Poster} >
                <source src = {Video} type='video/mp4'/>
                </VideoBg>
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
