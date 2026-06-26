// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-header">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            {/* Default Logo (shown when NOT scrolled) */}
            <img
              src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782444062/864edc0f-7cad-4ef7-8391-fbc875193795_gntxwk.png"
              alt="Oakmont Capital Logo"
              className="logo-img logo-default"
            />
            {/* New Logo for Scrolled State (shown when scrolled) */}
            <img
              src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782443492/WhatsApp_Image_2026-06-26_at_08.38.51-removebg-preview_1_szd2wk.png"
              alt="Oakmont Capital Logo"
              className="logo-img logo-scrolled"
            />
          </Link>
          
          {/* Hamburger Icon */}
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
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