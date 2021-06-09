import './../../App.css'
import styled from 'styled-components'

export const Form = styled.form`
justify-content: column;
display: grid;
grid-gap: 8px;
border-width: 10px;
border-color: black;
max-width: 560px;
align-content: center;
margin: auto;
`

export const FormArea = styled.div`
grid-area: form;

`

export const ContactContainer = styled.div`
display: grid;
justify-content: center;
max-width: 560px;
margin: auto;

grid-template-areas: 
"textwrapper image"
"form form";

grid-template-columns: auto 1fr;

`

export const TextWrapper = styled.div`
grid-area: textwrapper;



`



export const ImageWrapper = styled.div`
grid-area: image;

`



export const Input = styled.input`
width: 100%;
font-color: 'silver-pink';
outline: none;
background-color: white;
border-width: 4px;
border-style: solid;
border-color: #c4abac;
font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
padding: 0.5em;
font-size: 14px;
`

export const Message = styled.textarea`
width: 100%;
font-color: 'silver-pink';
outline: none;
background-color: white;
border-width: 4px;
border-style: solid;
border-color: #c4abac;
font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
padding: 0.5em;
font-size: 14px;
`

