import React from 'react'
import Contact from '../components/Contact'
import '../App.css'
import { Section,TextWrapper } from '../components/SectionElements'



const contactPage = () => {
    return (

        <>
        <Section className = 'cream-bg'>
        <Contact />
        </Section>
        </>
    )
}

export default contactPage
