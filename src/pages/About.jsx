import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Owner/Founder data - Single leader who handles everything
  const ownerData = {
    id: 1,
    name: "Harnoor Deol",
    position: "Founder & Mortgage Specialist",
    image: "https://i.postimg.cc/jSZHB8hS/Whats-App-Image-2026-04-09-at-11-28-24.jpg",
    bio: "As the founder of Oakmont Capital, Harnoor is dedicated to providing exceptional mortgage services with a personal touch. With a fresh perspective and deep commitment to client success, he has quickly established himself as a trusted partner in the mortgage industry, helping countless families achieve their homeownership dreams across Canada.",
    expertise: [
      "Certified Mortgage Professional",
      "Expert in CMHC Insured Financing",
      "Specialist in Canadian first-time home buyer programs",
      "Secondary suite refinancing specialist",
      "Investment property financing expert",
      "Self-employed and Alternative A mortgage solutions"
    ],
    philosophy: "Harnoor believes that every Canadian client deserves personalized attention and transparent guidance. Unlike large corporate lenders, he takes the time to understand each client's unique situation and finds the perfect mortgage solution tailored to their needs.",
    contactInfo: {
      phone: "+1 (780) 246 7559",
      email: "deolmortgages10@gmail.com"
    }
  };

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>ABOUT OAKMONT CAPITAL</h1>
          <p>Your Trusted Canadian Mortgage Partner</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>OUR STORY</h2>
              <p>Oakmont Capital was founded by Harnoor Deol with a simple yet powerful vision: to transform the Canadian mortgage industry by making home financing transparent, accessible, and stress-free for everyone across Canada.</p>
              <p>What started as a one-person mission has grown into a trusted platform serving hundreds of Canadian homeowners. As a sole proprietor, Harnoor personally handles every client's mortgage needs, combining cutting-edge technology with personalized service to deliver the best possible mortgage solutions for the Canadian market.</p>
              <p>Harnoor's commitment to innovation, integrity, and customer success has made Oakmont Capital a preferred partner for Canadian first-time homebuyers, seasoned investors, and families looking to refinance or add secondary suites to their properties.</p>
              <div className="story-signature">
                <p>- Harnoor Deol, Founder & Mortgage Specialist</p>
              </div>
            </div>
            <div className="story-image">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Harnoor Deol - Founder" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower Canadian individuals and families with the knowledge, tools, and support they need to make informed mortgage decisions and achieve their dream of homeownership across Canada.</p>
            </div>
            <div className="vision-card">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To become Canada's most trusted and innovative mortgage platform, setting new standards in transparency, customer service, and financial accessibility for all Canadians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner/Founder Section - Personal Touch */}
      <section className="owner-section">
        <div className="container">
          <h2>MEET YOUR MORTGAGE EXPERT</h2>
          <p className="owner-subtitle">Personalized attention from start to finish</p>
          
          <div className="owner-content">
            <div className="owner-image">
              <img src={ownerData.image} alt={ownerData.name} />
              <div className="owner-badge">
                <span>⭐</span>
                <span>Trusted Mortgage Partner</span>
              </div>
            </div>
            
            <div className="owner-details">
              <h3>{ownerData.name}</h3>
              <p className="owner-position">{ownerData.position}</p>
              <p className="owner-bio">{ownerData.bio}</p>
              
              <div className="owner-expertise">
                <h4>Areas of Expertise:</h4>
                <ul>
                  {ownerData.expertise.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="owner-philosophy">
                <h4>Philosophy:</h4>
                <p>{ownerData.philosophy}</p>
              </div>
              
              <div className="owner-contact">
                <a href={`tel:${ownerData.contactInfo.phone}`} className="owner-contact-btn">
                  📞 Call Now: {ownerData.contactInfo.phone}
                </a>
                <a href={`mailto:${ownerData.contactInfo.email}`} className="owner-contact-btn email">
                  ✉️ Email: {ownerData.contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>OUR CORE VALUES</h2>
          <p className="values-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Integrity First</h3>
              <p>Operating with complete transparency and honesty in every Canadian mortgage transaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer Focus</h3>
              <p>Your success and satisfaction are at the heart of everything we do for Canadian homeowners.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuously improving technology and processes to serve Canadian clients better.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Personal Service</h3>
              <p>Every Canadian client receives direct, personalized attention from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated for Canadian market */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Canadian Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$50M+</span>
              <span className="stat-label">Mortgages Funded</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Canadian Lender Partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Canadian Focus */}
      <section className="about-why-choose">
        <div className="container">
          <h2>WHY CHOOSE OAKMONT CAPITAL?</h2>
          <div className="choose-grid">
            <div className="choose-item">
              <div className="choose-icon">👤</div>
              <h3>Personal Service</h3>
              <p>Direct access to the founder - no call centers or automated systems</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🍁</div>
              <h3>Canadian Experts</h3>
              <p>Specialized knowledge of CMHC regulations and Canadian mortgage rules</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">⚡</div>
              <h3>Fast Approvals</h3>
              <p>Get pre-approved in 24 hours with our streamlined Canadian process</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🏠</div>
              <h3>Secondary Suite Specialists</h3>
              <p>Expert guidance for refinancing to add secondary suites</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">💻</div>
              <h3>Online Tools</h3>
              <p>Easy online application and document upload for Canadian clients</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🤝</div>
              <h3>Trusted Advisor</h3>
              <p>Building lasting relationships, not just processing transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>READY TO START YOUR CANADIAN MORTGAGE JOURNEY?</h2>
            <p>Work directly with Harnoor to find the perfect loan solution for your Canadian home needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">CONTACT US TODAY</Link>
              <Link to="/calculator" className="btn-secondary">TRY OUR CALCULATOR</Link>
            </div>
            <div className="personal-note">
              <p>✓ Direct access to the founder</p>
              <p>✓ Personalized attention from start to finish</p>
              <p>✓ No automated systems or call centers</p>
              <p>✓ CMHC insured financing expertise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;