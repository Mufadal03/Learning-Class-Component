import styled from "styled-components"
export const Container = styled.div`
width:90%;
margin:2rem auto;
border: 1px solid red;
height:${props=>props.height || "100vh"};
`

export const Heading = styled.h1`
color:${props=>props.color || "black"};
font-size: ${props=>props.size || "32px"};
font-weight: 400;
`
export const Button = styled.button`
padding:10px 20px;
border: none;
background-color: white;
color: darkblue;
border:2px solid blue;
`
export const Grid = styled.div`
display:grid;
grid-template-columns: repeat(${props => props["grid-template-columns"] || 4},1fr);
gap: 10px;
grid-template-rows: ${props=>props["grid-template-rows"]||"auto"};
`
export const Flex = styled.div`
display: flex;
flex-direction:${props => props.Direction || "row"};
height:${props => props.height};
border: 1px solid;
`