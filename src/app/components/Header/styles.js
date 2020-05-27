import styled from "styled-components";

export const Ul = styled.ul`
grid-column: 1 /span 12;
list-style-type: none;
width: 100%;
z-ndex: 1000;
background-color: rgba(255,255,255,0.6);
position:reative;
display:${(props)=>(props.show ? "block" : "none")};
transition:display 2s ease-in;
`
export const Li = styled.li`
font-size:3em;
font-weight:bold;
text-align:center;
width:100%;
margin:0.5em 0;
`