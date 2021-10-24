import React from 'react'
import {Nav, NavLink, NavbarContainer, Navlogo} from './NavbarElements'
import logo from './../../Kloe-Logo.png'

const Navbar = () => {
    return (
        <div>
            <Nav>
            <NavbarContainer>   

               <NavLink to ="/">
                   Home
               </NavLink>

               <NavLink to ="/portfolio">
                   Portfolio
               </NavLink>
               
               <NavLink to = "/">
                   <Navlogo>
                    <img src = {logo} alt = "logo" height ='100%' width='100%'/>
                    </Navlogo>
                </NavLink>

               <NavLink to ="/shop">
                   Shop
               </NavLink>

               <NavLink to ="/contact">
                   Contact
               </NavLink>
            </NavbarContainer>
        </Nav>
    </div>
)
}
export default Navbar
