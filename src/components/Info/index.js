
import '../../App.css'
import {Button} from '../ButtonElements'
import React from 'react'
import { Col1,Col2, InfoContainer,Body, InfoWrapper, Img, Header, Subtitle, ColColor } from './InfoElements'

export const Info = ({header, subtitle, body,sectColor,img,alt, page, link,bgColor, lightText},imgStart) => {
    return (
        <>
          <InfoContainer className={sectColor}>
            <InfoWrapper  imgStart= {imgStart}>
                <Col1 className={bgColor}>
                  <ColColor className={bgColor}>
                    <Header lightText={lightText}>{header}</Header>
                    <Subtitle lightText={lightText}>{subtitle}</Subtitle>
                    <Body lightText={lightText}>{body}</Body>
                    <Button to ={link}>{page}</Button>
                  </ColColor>
                </Col1>
              
              <Col2>
                <Img src ={img} alt={alt}/>
              </Col2>
            </InfoWrapper>
        </InfoContainer>    
      </>
    )
}

export const InfoNoLink = ({header, subtitle, body,sectColor,img,alt,bgColor, lightText},imgStart) => {
  return (
       <>
          <InfoContainer className={sectColor}  >
            <InfoWrapper  imgStart= {imgStart} >
                <Col1 className={bgColor}>
                  <ColColor className={bgColor}>
                    <Header lightText={lightText}>{header}</Header>
                    <Subtitle lightText={lightText}>{subtitle}</Subtitle>
                    <Body lightText={lightText}>{body}</Body>
                  </ColColor>
                </Col1>
              
              <Col2>
                <Img src ={img} alt={alt}/>
              </Col2>
            </InfoWrapper>
        </InfoContainer>    
      </>
  )
}
