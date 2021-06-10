import styled from 'styled-components'

export const InfoContainer = styled.div`
padding: 1em 1em 5em 1em;

align-items: center;
justify-items: center;
veritcal-align: center;

`

export const InfoWrapper = styled.div`

padding: 64px;
margin: auto;

display: grid;
grid-gap: 8px;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};
grid-template-columns: 1fr 1fr;


@media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1' 'col2'`)};
}
`



export const Col1 = styled.div`
grid-area: col1;



`

export const Col2 = styled.div`
grid-area: col2;



`

export const Body = styled.div`
font-weight: 100;
font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
font-size: 14px;
padding-top: 12px;

`

export const ImgWrapper = styled.div`
width: 1fr;
`

export const Img = styled.img`
max-width: 100%;
max-height: 300px;
align-items: center;
`