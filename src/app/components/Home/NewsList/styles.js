import styled from "styled-components";

import {Loader} from "../../styled-comp";

export const Ul = styled.ul`
list-style-type:none;
`;

export const Li = styled.li`
width:100%;
`;

export const List = styled(Ul)`
grid-column:1 /span 9;
background-color:white;
border:2px outset white;
border-radius:5px;
margin:0.5em;
@media only screen and (max-width: 700px){
  grid-column:1 /span 12;
}
`;

export const Item = styled(Li)`
padding:0.5em;
& h2{
  color:#424242;
  line-height:40px;
  height:40px;
}
&>article{
  &>h4>a{
    color:#424242;
    font-weight:600;
    cursor:help;
    &:hover{
      color:#00c853;
    }
  }
}
`;

export const PSearches = styled(Ul)`
grid-column:10 /span 3;
padding:2em;
@media only screen and (max-width: 700px){
  grid-column:1 /span 12;
}
`;

export const Search = styled(Li)`
font-size:1.5em;
cursor:pointer;
color:#0277bd;
margin:0 0.5em;
&>h4{
  text-decoration:underline;
  color:#212121;
}
`;

export const NewsLoader = styled(Loader)`
grid-column-start:4
`;