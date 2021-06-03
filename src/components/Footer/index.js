import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
SocialIcons,SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    <WebsiteRights> {new Date().getFullYear()} All rights reserved. – MARILARTOON </WebsiteRights>
                    <p>Design and Coded by Nicole Ciar</p>
                </FooterWrap>
            </FooterContainer>
        </div>
    )
}

export default Footer
