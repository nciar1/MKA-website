import styled from 'styled-components'
import style from './../../App.css'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background-color: #862325;
display: flex;
justify-content: center;

`

export const NavLink = styled(Link)`
color: #F9ECE4;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    color: #c4abac;
}
`



export const NavbarContainer = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-evenly;
width: 100%;
`