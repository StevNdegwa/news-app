import React from "react";

import MaterialIcon from "material-icons-react";

import {Row} from "../styled-comp";
import {Ul, Li} from "./styles";

export default function Header(){
	const [nav, showNav] = React.useState(false);
	return (<>
		<Row style={{height:"50px", lineHeight:"50px"}}>
			<form></form>
			<div onClick={()=>showNav(n=>!n)}>
				{nav && <MaterialIcon icon="clear" size="large"/>}
				{!nav && <MaterialIcon icon="menu" size="large"/>}
			</div>
		</Row>
		<Ul show={nav}>
			<Li>Home</Li>
			<Li>About</Li>
			<Li>Contact Us</Li>
		</Ul>
	</>)
}