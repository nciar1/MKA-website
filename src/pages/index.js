import React from 'react'
import HeroSection from '../components/HeroSection'
import { Info } from '../components/Info'
import {AboutMe,ContactMe,MyShop} from '../components/Info/Data'
import {VideoBanner,videoContainer} from '../components/SectionElements'
import Hero from '../components/Hero'

import Services from '../components/Services'


const Home = () => {
    
    
    return (
        <>
    <HeroSection/>
    <Info {...AboutMe}/>

    <Services />
    <Info {...MyShop}/>

    <Info {...ContactMe}/>




        </>
    )
}

export default Home
