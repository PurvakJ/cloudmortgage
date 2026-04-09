import React, { useState } from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";


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
    // Clear error for this field when user starts typing
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
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
      });
  
    } catch(err){
  
      console.log(err);
  
    }
  
    setIsSubmitting(false);
  
  };

  const handleCall = () => {
    window.location.href = "tel:+1 (780) 246 7559";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:deolmortgages10@gmail.com";
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Get in touch with our team. We're here to answer your questions and help you with your mortgage needs.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <p><strong>Main:</strong> +1 (780) 246 7559 </p>
            <button className="info-link call-btn" onClick={handleCall}>
              <span>📞</span> Call Now →
            </button>
          </div>
          
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email Us</h3>
            <p><strong>General:</strong> deolmortgages10@gmail.com</p>
            <button className="info-link email-btn" onClick={handleEmailClick}>
              <span>✉️</span> Send Email →
            </button>
          </div>
          
          <div className="info-card">
            <div className="info-icon">🕒</div>
            <h3>Business Hours</h3>
            <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
            <div className="emergency-note">
              <span>⚠️</span> Emergency support available 24/7
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send us a message</h2>
            <p className="form-note">We'll get back to you within 24 hours</p>
            
            {submitted && (
              <div className="success-message">
                <span>✓</span>
                Thank you! We'll get back to you soon.
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
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                  placeholder="(555) 123-4567"
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
                  placeholder="How can we help?"
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
                placeholder="Please provide details about your inquiry..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>


      <div className="social-section">
  <h2>Connect With Us</h2>
  <p>Follow us on social media for updates, tips, and news</p>

  <div className="social-links">

    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
      <FaFacebook size={22} />
      <span>Facebook</span>
    </a>

    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
      <FaTwitter size={22} />
      <span>Twitter</span>
    </a>

    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
      <FaLinkedin size={22} />
      <span>LinkedIn</span>
    </a>

    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
      <FaInstagram size={22} />
      <span>Instagram</span>
    </a>

    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
      <FaYoutube size={22} />
      <span>YouTube</span>
    </a>

    <a href="https://wa.me/+17802467559" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
      <FaWhatsapp size={22} />
      <span>WhatsApp</span>
    </a>

  </div>
</div>

      <div className="faq-prompt">
        <div className="faq-prompt-content">
          <h3>Frequently Asked Questions</h3>
          <p>Can't find what you're looking for? Check our FAQ page for quick answers.</p>
          <a href="/faqs" className="faq-link">View FAQs →</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;