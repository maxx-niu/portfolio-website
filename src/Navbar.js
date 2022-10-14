import React from 'react';
import logo from "./assets/Logo_MN_v1.svg";
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="nav">
      <Link to="/"><img src={logo} alt="" id="logo-svg"/></Link>
        <ul>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
    </nav>
    </>
  );
}

export default Navbar;