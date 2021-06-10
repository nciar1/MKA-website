import React from 'react'
import HeroSection from '../components/HeroSection'
import { Info } from '../components/Info'
import {AboutMe,ContactMe,MyShop} from '../components/Info/Data'
import {VideoBanner,videoContainer} from '../components/SectionElements'
import bannerVideo from "../video/MK Brand Banner.mp4"
import Hero from '../components/Hero'
import Services from '../components/Services'


const Home = () => {
    
    
    return (
        <>
    <Hero/>
    <Info {...AboutMe}/>

    <Services />
    <Info {...MyShop}/>

    <Info {...ContactMe}/>




        </>
    )
}

export default Home
