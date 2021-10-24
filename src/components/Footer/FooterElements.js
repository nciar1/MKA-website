import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
    background-color:#862325;
    display: flex;
    position: static;
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
    color: #F9ECE4;
    padding: 0;
    font-size: clamp(0.5em, 2vw,1em); 
    font-weight: 500;
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
    
    &:hover{
        color: #2f0708;
    }
`

export const NavLink = styled(Link)`
    color: #F9ECE4;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    height: 100%;
    cursor: pointer;
    cursor-color: pink;

    &:hover{
        color: #2f0708;
    }
`

export const NavLogo = styled.div`
    height: auto;
    width: 100%;
    max-width: 80px;
`