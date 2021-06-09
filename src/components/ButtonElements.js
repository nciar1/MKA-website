import styled from 'styled-components'
import {Link} from 'react-router-dom'
import '../App.css'

export const InputButton = styled.input`
background-color: #A44F51;
width: 100%;
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
width: 50px;
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