import styled from 'styled-components';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div`
    background: #100E11;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    width: 100vw;
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
}
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #100E11;
`;



export const VideoBg = styled.video`
width: 100vw;
height: auto;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;



`
;

