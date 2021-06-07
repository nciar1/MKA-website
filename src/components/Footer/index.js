import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
SocialIcons,SocialIconLink,NavLink,Navlogo } from './FooterElements';

import logo from './../../Kloe-Logo.png'

const Footer = () => {
    return (
        <div>
            <FooterContainer>
            
            
            <NavLink to = "/">
                   <Navlogo>
                    <img src = {logo} alt = "logo" height ='100%' width='100%'/>
                    </Navlogo>
                </NavLink>

               
                
                <FooterWrap>
                    <WebsiteRights> {new Date().getFullYear()} All rights reserved. – MARILARTOON </WebsiteRights>
                    <p>Design and Coded by Nicole Ciar</p>
                </FooterWrap>


            </FooterContainer>
        </div>
    )
}

export default Footer
