import './../../App.css'
import styled from 'styled-components'

export const Form = styled.form`
    justify-content: column;
    display: grid;
    grid-gap: 8px;
    border-width: 10px;
    border-color: black;
    width: 100%;
    align-content: center;
    margin: auto;
`

export const FormArea = styled.div`
    grid-area: form;
`

export const ButtonArea = styled.div`
    grid-area: button;
`

export const SocialArea = styled.div`
    grid-area: social;
`

export const ContactContainer = styled.div`
    display: grid;
    max-width: 560px;
    margin: auto;
    grid-template-areas: 
    "textwrapper textwrapper"
    "form form"
    "button social";
    grid-template-columns: auto 1fr;
`

export const TextWrapper = styled.div`
    grid-area: textwrapper;
    text-align: center;
    padding: 1em;
`

export const ImageWrapper = styled.div`
    grid-area: image;
`

export const Input = styled.input`
    width: auto-fit;
    font-color: 'silver-pink';
    outline: none;
    background-color: white;
    border-width: 4px;
    border-style: solid;
    border-color: #c4abac;
    font-family: 'Montserrat', sans-serif;
    padding: 0.5em;
    font-size: 14px;
`

export const Message = styled.textarea`
    width: auto-fit;
    max-height: 900px;
    height: auto;
    font-color: 'silver-pink';
    outline: none;
    background-color: white;
    border-width: 4px;
    border-style: solid;
    border-color: #c4abac;
    font-family: 'Montserrat', sans-serif;
    padding: 0.5em;
    font-size: 14px;
`

export const Label = styled.label`
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-align: left;
    color:#2f0708;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: right;
    align-items: right;
    margin: 1em auto;
     
`

export const SocialIconLink = styled.a`
    color: #A44F51;
    font-size: 2em;
    padding: 0;

    &:hover{
        color: #2f0708;
    }
`
export const BgImage = styled.div`
    padding: 1em;
    background:url("../images/bgBackup.png");
    background-size: cover;
    height: auto;
    width: 100%;
`