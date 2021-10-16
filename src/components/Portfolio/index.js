import React from 'react'
import '../../App.css'
import PortfolioImg from '../../images/ExampleArt.png'
import { ImgContainer, PortfolioContainer, Img } from './PortfolioElements'


export const Portfolio = () => {
   
    return (
        <PortfolioContainer>
            <h1> My Portfolio</h1>
            <body>Check out some of my Digital Illustrations</body>   
            <ImgContainer>
            <Img src={PortfolioImg} alt="Portfolio" />
            </ImgContainer>
           
        </PortfolioContainer>
    )
}

export default Portfolio

