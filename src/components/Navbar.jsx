import "./CSS/navbar.css";
import "../../node_modules/fontawesome-free-5.15.2-web/css/all.min.css";
import { useState } from "react";
import {NavLink} from 'react-router-dom'

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
      <i
        className="fas fa-bars"
        onClick={() => setShowNav((prevNav) => !prevNav)}
      ></i>
    </div>
  );
}

export default Navbar;
