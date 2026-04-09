// components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
  <img
    src="https://i.postimg.cc/nzjRT8BG/Screenshot-2026-04-09-at-15-47-07-removebg-preview.png"
    alt="MortgageCloud Logo"
    className="logo-img"
  />
</Link>
        
        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/calculator" className="nav-link" onClick={closeMenu}>Calculator</NavLink></li>
          <li><NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/faqs" className="nav-link" onClick={closeMenu}>FAQs</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
        
        {/* Decorative lines after nav links */}
        <div className="footer-lines">
          <div className="line-big"></div>
          <div className="line-small"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;