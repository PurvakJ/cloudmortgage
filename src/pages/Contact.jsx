import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const observerRef = useRef(null);

  // Optimized Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('animate');
          });
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwyW6LY1LQToiWC6JKl3ucL3ALtM1no0758Ayv2ZoGYsZoo8-80LfBxwNm582m3aTOD/exec", {
        method: "POST",
        body: JSON.stringify({
          action: "submitContact",
          ...formData
        })
      });
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch(err) {
      console.log(err);
    }
    setIsSubmitting(false);
  };

  const handleCall = () => {
    window.location.href = "tel:+17802467559";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:deolmortgages10@gmail.com";
  };

  return (
    <div className="contact-page">
      {/* Hero Section - Full width image with 1500px content constraint */}
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-image" aria-label="Contact us hero background"></div>
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="fade-up">Contact Oakmont Capital</h1>
            <p className="fade-up">Get in touch with our mortgage team. We're here to answer your questions and help you with your mortgage needs across Canada.</p>
            <div className="hero-stats fade-up">
              <div className="hero-stat">
                <span className="hero-stat-number">1000+</span>
                <span className="hero-stat-label">Happy Families</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">24/7</span>
                <span className="hero-stat-label">Support</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">&lt; 24h</span>
                <span className="hero-stat-label">Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container - Max 1500px */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="info-card fade-up">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p><strong>Main:</strong> +1 (780) 246 7559</p>
              <p><strong>Toll-Free:</strong> Coming Soon</p>
              <button className="info-link call-btn" onClick={handleCall}>
                <span>📞</span> Call Now →
              </button>
            </div>
            
            <div className="info-card fade-up" style={{ animationDelay: '0.05s' }}>
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p><strong>General:</strong> deolmortgages10@gmail.com</p>
              <p><strong>Support:</strong> deolmortgages10@gmail.com</p>
              <button className="info-link email-btn" onClick={handleEmailClick}>
                <span>✉️</span> Send Email →
              </button>
            </div>
            
            <div className="info-card fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="info-icon">🕒</div>
              <h3>Business Hours (MST)</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
              <div className="emergency-note">
                <span>⚠️</span> Emergency mortgage support available 24/7 for  clients
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section fade-up" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send us a message</h2>
              <p className="form-note">We'll get back to you within 24 hours about your  mortgage inquiry</p>
              
              {submitted && (
                <div className="success-message">
                  <span>✓</span>
                  Thank you! A Oakmont Capital mortgage specialist will contact you soon.
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="John Smith"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="john.smith@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(780) 123-4567"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="e.g., CMHC Insurance, Pre-Approval, Refinancing"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                  placeholder="Please provide details about your  mortgage inquiry... (e.g., property location, purchase price, down payment amount)"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

        <div className="social-section fade-up">
          <h2>Connect With Oakmont Capital</h2>
          <p>Follow us on social media for  mortgage updates, tips, and news</p>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebook size={20} />
              <span>Facebook</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="faq-prompt fade-up">
          <div className="faq-prompt-content">
            <h3>Mortgage Questions?</h3>
            <p>Can't find what you're looking for? Check our FAQ page for quick answers about CMHC, stress tests, and more.</p>
            <a href="/faqs" className="faq-link">View FAQs →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;