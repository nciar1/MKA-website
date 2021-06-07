import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color:#862325;
    display: flex;
    position: flex-start;

`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;

    @media screen and (max-width: 820px)
 {
     padding-top: 32px;
 }
 `

export const FooterLinksWrapper = styled.div`
 display: flex;

 @media screen and (max-wifth: 820px){
     flex-direction: column;
 }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #ffff;

    text-align: left;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color:#ffff;
    text-decoration: none;
    margin-bottom: 0.5 rem;
    font-size: 14px;

    &:hover{
        color: black;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    cursor: pointer;
    text-direction: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: white;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: white;
    font-size: 24px;

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

export const Navlogo = styled.div`
height: auto;
width: 100%;
max-width: 80px;
`