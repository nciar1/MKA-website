import React from 'react';
import { FaInstagram} from 'react-icons/fa';
import { SiTiktok} from 'react-icons/si';
import { AiOutlineYoutube} from 'react-icons/ai';
import '../../App.css'


import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
SocialIcons,SocialIconLink,NavLink,NavLogo } from './FooterElements';
import { IconContext } from "react-icons";



import logo from './../../Kloe-Logo.png'

const Footer = () => {
    return (
        <div>

            <IconContext.Provider value={{ width: "5em"}}>

            <FooterContainer>
            
            
            <NavLink to = "/">
                   <NavLogo>
                    <img src = {logo} alt = "logo" height ='100px' width='100px'/>
                    </NavLogo>
            </NavLink>

               
                
                <FooterWrap>
                    <WebsiteRights> {new Date().getFullYear()} All rights reserved. – MARILARTOON </WebsiteRights>
                    <WebsiteRights>Design and Coded by Nicole Ciar</WebsiteRights>
                 
                </FooterWrap>


<SocialMediaWrap>
<SocialIconLink href = 'https://instagram.com/marilartoon?utm_medium=copy_link' target='_blank'>
    <FaInstagram />
    </SocialIconLink >
   
    <SocialIconLink href ='https://www.youtube.com/channel/UCs3RVIfILIW-P3TBbfE4_qg' target='_blank'>
    <AiOutlineYoutube />
    </SocialIconLink >

    <SocialIconLink  href ='https://www.tiktok.com/@marilartoon?_d=secCgYIASAHKAESMgowObsmdQMVfsqjI0lpgTvSHEy0v0iD7HbWr8lFGG0g%2FmxQ9Eh1AY6gujgotXEg3baMGgA%3D&_r=1&enable_clips=1&language=en&sec_uid=MS4wLjABAAAAEcFSmGCD0ms98WddtjRQRF9y4S1NIiSQAK3cWQc9NIzOhCYcrcYq42wrgoIVhVf7&sec_user_id=MS4wLjABAAAA4YYzvl1SWnYvQj5IX4XoXp8N2otf0gmuQ4y2z49d3Vc8jUV0ix2oqXtv524HCzqx&share_app_id=1233&share_author_id=6624893022046060545&share_link_id=E63FCEF3-D659-4683-BC28-6DAA0DE00507&source=h5_m&tt_from=sms&u_code=2jfaa85ge5f2f&user_id=62572854654828544&utm_campaign=client_share&utm_medium=ios&utm_source=sms' target='_blank'>
    <SiTiktok />
    </SocialIconLink >

    </SocialMediaWrap>
  

</FooterContainer>
</IconContext.Provider>


            
        </div>
    )
}

export default Footer
