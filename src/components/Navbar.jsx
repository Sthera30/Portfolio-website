import "./CSS/navbar.css";
import { useState } from "react";
import {NavLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header">
      <div className="left-bar">
        <span>SIRTEMBEKILE.DEV</span>
      </div>

      <div className={`right-bar default ${showNav ? "show" : "hide"}`}>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"/about-me"}>About Me</NavLink>
        <NavLink to={"/coding"}>Coding</NavLink>
        <NavLink to={"/certification"}>Certification</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <FaBars style={{color: '#fff', display: 'none'}}
        className="bars"
        onClick={() => setShowNav((prevNav) => !prevNav)}
      ></FaBars>
    </div>
  );
}

export default Navbar;
