import React from "react";

import {Link} from "react-router-dom";
import {MdMenu, MdClear, MdSearch} from "react-icons/md"

import {Ul, Li, Nav, HControl,Search,SearchInput} from "./styles";

const {countries} = require("../../data/countries.json")

export default function Header(){
  const [nav, showNav] = React.useState(false);
  
  function submitSearch(evt){
    evt.preventDefault();
  }
  
  return (<>
    <Nav>
      <HControl>
        <form method="POST" onSubmit={submitSearch}>
          <SearchInput placeholder="Search a Topic"/>
          <Search><MdSearch size="2em"/></Search>
        </form>
      </HControl>
      <HControl>
        <select>
          {countries.map((c)=>{
            return (<option key={c.key} value={c.keys}>{c.name}</option>)
          })}
        </select>
      </HControl>
      <HControl onClick={()=>showNav(n=>!n)}>{nav ? <MdClear size="2em"/> :<MdMenu size="2em"/>}</HControl>
    </Nav>
    <Ul show={nav}>
      <Li><Link to="/">Home</Link></Li>
      <Li><Link to="/about">About</Link></Li>
      <Li><Link to="/contact-us">Contact Us</Link></Li>
    </Ul>
  </>)
}