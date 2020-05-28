import React from "react";

import {IconContext} from "react-icons";
import {MdMenu, MdClear} from "react-icons/md"

import {Row} from "../styled-comp";
import {Ul, Li} from "./styles";

export default function Header(){
	const [nav, showNav] = React.useState(false);
	return (<IconContext.Provider value={{size:"2em",className:"news-app-icons"}}>
		<Row style={{height:"50px", lineHeight:"50px"}}>
			<form></form>
			<div onClick={()=>showNav(n=>!n)}>
				{!nav && <MdMenu/>}
				{nav && <MdClear/>}
			</div>
		</Row>
		<Ul show={nav}>
			<Li>Home</Li>
			<Li>About</Li>
			<Li>Contact Us</Li>
		</Ul>
	</IconContext.Provider>)
}