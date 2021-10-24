import React from 'react'
import Contact from '../components/Contact'
import '../App.css'
import { Section} from '../components/SectionElements'

const contactPage = () => {
    return (
        <Section className='bg-image'>
        <Contact />
        </Section>
    )
}

export default contactPage
