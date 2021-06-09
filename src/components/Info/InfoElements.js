import styled from 'styled-components'

export const InfoContainer = styled.div`
margin: 1em 1em 5em 1em;
display: grid;
grid-template-areas: 'col1 col2';
grid-template-columns: '1fr 1fr;
`

export const Col1 = styled.div`
grid-area: col1;
background-color: 'blue';
`

export const Col2 = styled.div`
grid-area: col2;
background-color: 'red';
`
