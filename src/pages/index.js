import React from 'react'
import HeroSection from '../components/HeroSection'
import { Info } from '../components/Info'
import {AboutMe,ContactMe,MyShop} from '../components/Info/Data'
import {VideoBanner,videoContainer} from '../components/SectionElements'

import Portfolio from '../components/Portfolio'


import Services from '../components/Services'


const Home = () => {
    
    
    return (
        <>
    <HeroSection/>
    <Info {...AboutMe}/>

    <Portfolio/>

    <Services />
    <Info {...MyShop}/>

    <Info {...ContactMe}/>




        </>
    )
}

export default Home
