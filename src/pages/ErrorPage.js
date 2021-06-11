
import React from 'react'
import '../App.css'
import { Section } from '../components/SectionElements'
import {Button} from '../components/ButtonElements'

import { Info } from '../components/Info'
import {ErrorMessage} from '../components/Info/Data'


const ErrorPage = () => {
    return (
        <>
        <Section className ='cream-bg' align-items='center'>

           <Info {...ErrorMessage} />
        </Section>

    


</>
    )
}

export default ErrorPage