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
`;

export const Item = styled(Li)`
padding:0.5em;
&>article{
  &>h4>a{
    color:black;
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
`;

export const Search = styled(Li)`
font-size:1.5em;
cursor:pointer;
color:#0277bd;
&>h4{
  text-decoration:underline;
  color:#212121;
}
`;

export const NewsLoader = styled(Loader)`
grid-column-start:4
`;