import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mortgage<span>Cloud</span></h3>
          <p className="tagline">YOUR TRUSTED MORTGAGE PARTNER</p>
          <p className="description">
            We help families achieve their dream of homeownership with expert guidance, 
            competitive rates, and personalized mortgage solutions tailored to your unique needs.
          </p>
          <div className="trust-badge">
            <span>✓</span> 5000+ Happy Clients
          </div>
          <div className="trust-badge">
            <span>✓</span> $500M+ Loans Funded
          </div>
        </div>

        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><Link to="/services">Conventional Loans</Link></li>
            <li><Link to="/services">FHA Loans</Link></li>
            <li><Link to="/services">VA Loans</Link></li>
            <li><Link to="/services">Mortgage Refinancing</Link></li>
            <li><Link to="/services">First-Time Home Buyers</Link></li>
            <li><Link to="/services">Private Mortgages</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT INFO</h4>
          <div className="contact-info">
            <p>
              <strong>📞 PHONES:</strong><br />
              Main: +1 (780) 246 7559<br />
            </p>
            <p>
              <strong>✉️ EMAIL:</strong><br />
              <a href="mailto:deolmortgages10@gmail.com">deolmortgages10@gmail.com</a><br />
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>BUSINESS HOURS</h4>
          <div className="business-hours">
            <p><strong>Monday - Friday:</strong><br />9:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong><br />10:00 AM - 2:00 PM</p>
            <p><strong>Sunday:</strong><br />Closed</p>
            <div className="emergency-support">
              <span>⚠️</span> Emergency Support Available 24/7
            </div>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 MortgageCloud. All rights reserved.</p>
          <div className="social-icons">

<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
  <FaFacebook size={22} />
</a>

<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
  <FaTwitter size={22} />
</a>

<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <FaLinkedin size={22} />
</a>

<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <FaInstagram size={22} />
</a>

</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;