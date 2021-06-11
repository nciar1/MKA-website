
import '../../App.css'
import {Button} from '../ButtonElements'

import React from 'react'
import { Col1,Col2, InfoContainer,Body, InfoWrapper, Img } from './InfoElements'

export const Info = ({header, subtitle, body,color,img,alt, page, link},imgStart) => {
    return (
        <>
          <InfoContainer className={color}>
            <InfoWrapper  imgStart= {imgStart} >

              <Col1> 
                <h1>{header}</h1>
                <subtitle>{subtitle}</subtitle>
                <Body>{body}</Body>

                
                <Button to ={link}>{page}</Button>
              </Col1>
              
              <Col2>
                <Img src ={img} alt={alt}/>
              </Col2>
     
              </InfoWrapper>
        </InfoContainer>    
      </>
    )
}
