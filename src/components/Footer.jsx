import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* Both Logos Side by Side */}
          <div className="footer-logos-container">
            <div className="footer-logo">
              <img 
                src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782443492/WhatsApp_Image_2026-06-26_at_08.38.51-removebg-preview_1_szd2wk.png" 
                alt="Oakmont Capital Logo" 
                className="footer-logo-img"
              />
            </div>
            <div className="footer-logo-divider"></div>
            <div className="footer-logo-secondary-wrapper">
              <span className="powered-by-text">Powered By</span>
              <div className="footer-logo-secondary">
                <img 
                  src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782443993/WhatsApp_Image_2026-06-26_at_08.46.32_dn2hs2.jpg" 
                  alt="Oakmont Capital Secondary Logo" 
                  className="footer-logo-img-secondary"
                />
              </div>
              <br></br>
              <span className="powered-by-text">License No. #10810</span>
            </div>
          </div>
          
          {/* Tagline line after the logos */}
          <p className="footer-tagline">YOUR TRUSTED CANADIAN MORTGAGE PARTNER</p>
      
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