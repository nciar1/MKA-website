import styled from 'styled-components'
import {Link} from 'react-router-dom'
import '../App.css'

export const InputButton = styled.input`
background-color: #A44F51;
width: auto;
padding: 0.5em;
font-size: 14px;
font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
border-style: solid;
border-color: #A44F51;
font-color: 'white';

&:hover{
    background-color: white;
}
`


export const Button= styled(Link)`
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