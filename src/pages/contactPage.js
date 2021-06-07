import React from 'react'
import Contact from '../components/Contact'
import '../App.css'
import { Section,TextWrapper } from '../components/SectionElements'



const contactPage = () => {
    return (

        <>
        <Section className = 'cream-background'>
          
          <TextWrapper>
        <h1>Contact Me</h1>
        <bold>If you’d like to work together, feel free to send me a message. You can also find me on social media!</bold>
        </TextWrapper>
        <Contact />



        </Section>
        </>
    )
}

export default contactPage
