import styled from 'styled-components'

export const InfoContainer = styled.div`
  padding: 1em 1em 1em 1em;
  max-height: 100vh;
  width: auto;
  align-items: center;
  justify-items: center;
  veritcal-align: center;
  justify-content: center;
  align-content: center;
`

export const InfoWrapper = styled.div`
  position: center;
  text-align: center;
  align-items: center;
  padding: 5em;
  margin: 2em;
  display: grid;
  grid-gap: 0;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;

  @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1' 'col2'`)};
  }
`

export const Col1 = styled.div`
  grid-area: col1;
  align-items: center;
  justify-items: center;
  padding: 5%;
`

export const ColColor = styled.div`
  height: 100%;
  margins: auto;
`

export const Col2 = styled.div`
  grid-area: col2;
`

export const Body = styled.div`
  font-weight: 300;
  font-family: montserrat, sans-serif;
  padding-top: 12px;
  color: ${({lightText}) => (lightText ? '#F9ECE4' : '#2f0708')};
  font-size: clamp(.5em, 2vw,1em);
`

export const Header = styled.div`
  font-family: Beyond-Inifinity-Demo;
  font-weight: 100;
  font-size: clamp(3em, 2vw,6em);
  color: ${({lightText}) => (lightText ? '#F9ECE4' : '#2f0708')};
`

export const Subtitle = styled.div`
  font-weight: 700;
  font-family: montserrat, sans-serif;
  padding-top: 12px;
  color: ${({lightText}) => (lightText ? '#F9ECE4' : '#2f0708')};
`

export const ImgWrapper = styled.div`
  width: auto;
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 50vh;
  align-items: center;
  height: auto;
`