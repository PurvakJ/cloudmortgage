import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Oakmont<span>Capital</span></h3>
          <p className="tagline">YOUR TRUSTED CANADIAN MORTGAGE PARTNER</p>
          <p className="description">
            Oakmont Capital helps Canadian families achieve their dream of homeownership with expert guidance, 
            competitive rates, and personalized mortgage solutions tailored to your unique needs across Canada.
          </p>
          <div className="trust-badge">
            <span>✓</span> 500+ Happy Canadian Clients
          </div>
          <div className="trust-badge">
            <span>✓</span> $50M+ Canadian Loans Funded
          </div>
          <div className="trust-badge">
            <span>✓</span> Trusted Mortgage Partner
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
            <li><Link to="/services">Refinance for Secondary Suites</Link></li>
            <li><Link to="/services">Investment Property Program</Link></li>
            <li><Link to="/services">Family Plan Program</Link></li>
            <li><Link to="/services">Vacation/Secondary Homes</Link></li>
            <li><Link to="/services">Self-Directed RRSP</Link></li>
            <li><Link to="/services">Borrowed Down Payment</Link></li>
            <li><Link to="/services">Second Mortgage Program</Link></li>
            <li><Link to="/services">Portability Feature</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT INFO</h4>
            <p>
              <strong>📞 PHONE:</strong><br />
              +1 (780) 246 7559<br />
            </p>
            <p>
              <strong>✉️ EMAIL:</strong><br />
              <a href="mailto:deolmortgages10@gmail.com">deolmortgages10@gmail.com</a><br />
            </p>
            <p>
              <strong>🏠 SERVING:</strong><br />
              Clients Across Canada
            </p>
        </div>

        <div className="footer-section">
          <h4>BUSINESS HOURS (MST)</h4>
          <div className="business-hours">
            <p><strong>Monday - Friday:</strong><br />9:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong><br />10:00 AM - 2:00 PM</p>
            <p><strong>Sunday:</strong><br />Closed</p>
            <div className="emergency-support">
              <span>⚠️</span> Emergency Mortgage Support Available 24/7 for Canadian Clients
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Oakmont Capital. All rights reserved. | Canadian Mortgage Provider</p>
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