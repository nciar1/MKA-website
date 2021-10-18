import styled from 'styled-components'
import style from './../../App.css'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background-color: #862325;
display: flex;
justify-content: center;
padding: 1rem;

`

export const NavLink = styled(Link)`
color: #F9ECE4;
display: flex;
align-items: center;
text-decoration: none;
padding: 0;
height: 100%;
cursor: pointer;
font-weight: 700;

&:hover{
    color: #2f0708;
}



`



export const NavbarContainer = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-evenly;
width: 100%;
`

export const Navlogo = styled.div`
height: auto;
width: 100%;
max-width: 80px;
`