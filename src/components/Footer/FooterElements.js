import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
    background-color:#862325;
    display: flex;
    position: flex-start;
    padding: 1em;
`

export const FooterWrap = styled.div`
   padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`


export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    cursor: pointer;
    text-direction: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #FCD1D1;
    padding: 1em;
    font-size: 16px;

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1em;
    
    
    

    
`

export const SocialIconLink = styled.a`
    color: #FCD1D1;
    font-size: 2em;
    padding: .1em;


`


export const NavLink = styled(Link)`
color: #F9ECE4;
display: flex;
align-items: center;
text-decoration: none;
padding: 0;
height: 100%;
cursor: pointer;

&.active{
    color: #c4abac;
}
`

export const NavLogo = styled.div`
height: auto;
width: 100%;
max-width: 80px;
`