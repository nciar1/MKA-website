import styled from 'styled-components';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 80px;
    height: 100vh;
    width: auto;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background:rgba(192, 123, 125, 0.5);
}
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


`;




export const VideoBg = styled.video`
width: 100%;
height: 100vh;
-o-object-fit: cover;
object-fit: cover;




`
;

export const BusinessBanner = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: clamp(3rem, 2vw,6rem) clamp(6rem, 2vw,12rem);
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 4px;

`


export const BusinessName = styled.h1`
font-weight: 900;
font-family: "Open Sans", Helvetica, Arial, sans-serif;
font-size: clamp(3rem, 2vw,5rem);
justify-content: center;
align-items: center;
text-align: center;

`

export const BusinessDesc = styled.p`
font-weight: 1,600;
font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
font-size: clamp(2rem, 2vw,3rem);
justify-content: center;
align-items: center;
text-align:center;
`

export const Name = styled.h2`
font-weight: 1,600;
font-size: clamp(2rem, 2vw,3rem);
padding-top: 8px;
justify-content: center;
align-items: center;
text-align:center;
`
