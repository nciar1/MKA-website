import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavMenuLeft, NavMenuCenter, NavMenuRight, mainMenu, NavbarContainer} from './NavbarElements'
import logo from './../../Kloe-Logo.png'

const Navbar = () => {
    return (
        <div>
            <Nav>
            <NavbarContainer>   

               <NavLink to ="/home" activeStyle>
                   Home
               </NavLink>

               <NavLink to ="/portfolio" activeStyle>
                   Portfolio
               </NavLink>
               
               <NavLink to = "/">
                    <img src = {logo} alt = "logo" height ='100px' width='100px'/>
                </NavLink>

               <NavLink to ="/shop" activeStyle>
                   Shop
               </NavLink>

               <NavLink to ="/contact" activeStyle>
                   Contact
               </NavLink>

    </NavbarContainer>
               
            
          
            </Nav>
        </div>
    )
}

export default Navbar
