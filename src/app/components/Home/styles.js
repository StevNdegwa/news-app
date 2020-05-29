import styled from "styled-components";

import {Row, Control} from "../styled-comp";

export const Topics = styled(Row)`
height:60px;
background-color:#424242;
`;

export const Topic = styled(Control)`
grid-column:1 /span 12;
height:60px;
line-height:60px;
min-width:60px;
font-size:1.8em;
font-weight:bold;
color:white;
text-align:center;
cursor:pointer;
&:hover{
  background-color:#00c853;
  border:1px outset #00c853;
}
`;

export const Content = styled.div`
position:relative;
display:grid;
grid-column:1 /span 12;
grid-template-columns:10% 10% 10% 10% 5% 5% 5% 5% 10% 10% 10% 10%;
`;

export const SelectTopic = styled.ul`
list-style-type:none;
min-width:150px;
border:1px outset #424242;
border-radius:0 0 5px 5px;
margin:0 5px;
position:absolute;
z-index:500;
background-color:white;
`;

export const TopicOption = styled.li`
height:40px;
line-height:40px;
padding:0 0.5em;
cursor:pointer;
&:hover{
  font-weight:600;
}
`;