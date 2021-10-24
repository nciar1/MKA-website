import styled from 'styled-components'
import {Link} from 'react-router-dom'
import '../App.css'

export const InputButton = styled.input`
    display: block;
    text-decoration: none;
    background-color: #A44F51;
    min-width: 100px;
    width: fit-content;
    padding: 1em;
    font-size: 14px;
    font-family: montserrat, sans-serif;
    color: white;
    text-align: center;
    margin: 1em auto;
    font-weight: 700;
    border: none;

    &:hover{
        background-color: #2f0708;
}
`
export const Button= styled(Link)`
    font-weight: 700;
    display: block;
    text-decoration: none;
    background-color: #A44F51;
    min-width: 100px;
    width: fit-content;
    padding: 1em;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    color: white;
    text-align: center;
    margin: 2em auto;

    &:hover{
        background-color: #2f0708;
    }
`