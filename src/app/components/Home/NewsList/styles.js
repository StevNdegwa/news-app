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
border:1px solid black;
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
border:1px solid black;
`;

export const NewsLoader = styled(Loader)`
grid-column-start:4
`;