import React from 'react'
import '../../App.css'
import PortfolioImg from '../../images/ExampleArt.png'
import { ImgContainer, PortfolioContainer, Img } from './PortfolioElements'
import { Button } from '../ButtonElements'

export const Portfolio = () => {
   
    return (
        <PortfolioContainer>
            <h1> My Portfolio</h1>
            <body>Check out some of my Digital Illustrations</body>   
            <ImgContainer>
            <Img src={PortfolioImg} alt="Portfolio" />
            </ImgContainer>
            <Button to ='/Portfolio'>View Portfolio</Button>
           
        </PortfolioContainer>
    )
}

export default Portfolio

