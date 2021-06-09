import React from 'react'
import HeroSection from '../components/HeroSection'
import { Info } from '../components/Info'
import {AboutMe,MyShop} from '../components/Info/Data'
import {VideoBanner,videoContainer} from '../components/SectionElements'
import bannerVideo from "../video/MK Brand Banner.mp4"


const Home = () => {
    
    
    return (
        <>
    <HeroSection/>
    <Info {...AboutMe}/>
    <Info {...MyShop}/>
 

        </>
    )
}

export default Home
