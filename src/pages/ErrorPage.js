
import React from 'react'
import '../App.css'
import { Section } from '../components/SectionElements'
import {Button} from '../components/ButtonElements'

const ErrorPage = () => {
    return (
        <Section className ='cream-background' align-items='center'>

            <h1>404 Error</h1>
            <bold>Sorry, looks like this page can't be found!</bold>

            <Button to ='/'>
                Home
            </Button>
        </Section>
    )
}

export default ErrorPage