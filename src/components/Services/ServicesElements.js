import styled from 'styled-components'

export const ServiceContainer = styled.div`
padding: 4em;
margin: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
text-align: center;
align-items: top;
grid-gap: 16px;

`

export const ServiceWrapper = styled.div`
text-align: center;
align-items: center;
flex-direction: column;
display:flex;



`

export const ServiceIconWrapper =styled.div`
background-color: #FCD1D1;
border-radius: 100px;
align-items: center;
height: 100px;
width: 100px;

`

export const ServiceLabel =styled.div`
padding: 12px;
font-size: clamp(10px, 2vw,14px);

align-items: center;


`

export const ServiceHeader =styled.div`
text-align: center;
align-items: center;
padding-top: 1em;
font-family: Beyond-Inifinity-Demo;
font-weight: 100;
font-size: 64px;


`

export const ServiceIcon = styled.img`
max-width:100px;
border-radius: 100px;
align-items: center;
height: 100px;
width: 100px;

`