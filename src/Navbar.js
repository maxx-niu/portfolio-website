import React from 'react';
import logo from "./assets/Logo_MN_v1.svg";
import "./Navbar.css";
import { useRef, useState, useEffect } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <nav className="nav" ref={navRef}>
      <input id="nav-toggle" type="checkbox"></input>
      <a className="nav-logo" href="#app-container"><img src={logo} alt="" id="logo-svg"/></a>
      <ul>
          <li><a href="#about-me-container">About Me</a></li>
          <li><a href="#projects-container">Experiences</a></li>
          <li><a href="#contact-me-container">Contact</a></li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Navbar;