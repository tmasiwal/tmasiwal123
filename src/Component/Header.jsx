import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">TANUJ MASIWAL</a>

      <nav className="navbar">
        <Link to="home" smooth={true} duration={500}  offset={-100}>Home</Link>
        <Link to="about" smooth={true} duration={500} offset={-100}>About Me</Link>
        <Link to="skills" smooth={true} duration={500}  offset={-100} >Skills</Link>
        <Link to="projects" smooth={true} duration={500}  offset={-100}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} offset={-100}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
