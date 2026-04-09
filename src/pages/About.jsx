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
    bio: "With over 5 years of experience in mortgage and financial services, Harnoor personally oversees every client's mortgage journey. As the sole owner and operator of MortgageCloud, he brings personalized attention and expertise to each and every client, ensuring they receive the best possible guidance and rates.",
    expertise: [
      "5+ years of mortgage industry experience",
      "Certified Mortgage Professional",
      "Expert in Conventional, FHA, VA, and USDA loans",
      "Specialist in first-time home buyer programs",
      "Debt consolidation and refinancing expert",
      "Private lending and alternative financing solutions"
    ],
    philosophy: "Harnoor believes that every client deserves personalized attention and transparent guidance. Unlike large corporate lenders, he takes the time to understand each client's unique situation and finds the perfect mortgage solution tailored to their needs.",
    contactInfo: {
      phone: "+1 (780) 246 7559",
      email: "deolmortgages10@gmail.com"
    }
  };

  const milestones = [
    { 
      year: "2020", 
      title: "Company Founded", 
      description: "Harnoor started MortgageCloud with a mission to make home financing accessible and transparent for everyone."
    },
    { 
      year: "2022", 
      title: "First Major Milestone", 
      description: "Funded over $100M in mortgages for families across the country, establishing trust and reliability."
    },
    { 
      year: "2024", 
      title: "Digital Transformation", 
      description: "Launched online platform for seamless mortgage applications while maintaining personal touch."
    },
    { 
      year: "2025", 
      title: "Expansion", 
      description: "Expanded services to all 50 states with licensed partners nationwide."
    },
    { 
      year: "2026", 
      title: "Industry Leader", 
      description: "Recognized as one of the top mortgage providers with 5000+ satisfied clients."
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>ABOUT MORTGAGECLOUD</h1>
          <p>Your Trusted Mortgage Partner</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>OUR STORY</h2>
              <p>MortgageCloud was founded by Harnoor Deol with a simple yet powerful vision: to transform the mortgage industry by making home financing transparent, accessible, and stress-free for everyone.</p>
              <p>What started as a one-person mission has grown into a trusted platform serving thousands of homeowners across the country. As a sole proprietor, Harnoor personally handles every client's mortgage needs, combining cutting-edge technology with personalized service to deliver the best possible mortgage solutions.</p>
              <p>Harnoor's commitment to innovation, integrity, and customer success has made MortgageCloud a preferred partner for first-time homebuyers, seasoned investors, and families looking to refinance.</p>
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
              <p>To empower individuals and families with the knowledge, tools, and support they need to make informed mortgage decisions and achieve their dream of homeownership.</p>
            </div>
            <div className="vision-card">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To become the most trusted and innovative mortgage platform, setting new standards in transparency, customer service, and financial accessibility.</p>
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
                <span>5+ Years Experience</span>
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
              <p>Operating with complete transparency and honesty in every transaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer Focus</h3>
              <p>Your success and satisfaction are at the heart of everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuously improving technology and processes to serve you better.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Personal Service</h3>
              <p>Every client receives direct, personalized attention from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$500M+</span>
              <span className="stat-label">Loans Funded</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5,00+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Lender Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline Section */}
      <section className="milestones-section">
        <div className="container">
          <h2>OUR JOURNEY</h2>
          <p className="milestones-subtitle">Key milestones in our history</p>
          <div className="modern-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item-modern">
                <div className="timeline-content-modern">
                  <div className="timeline-decoration"></div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-year-modern">{milestone.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-choose">
        <div className="container">
          <h2>WHY CHOOSE MORTGAGECLOUD?</h2>
          <div className="choose-grid">
            <div className="choose-item">
              <div className="choose-icon">👤</div>
              <h3>Personal Service</h3>
              <p>Direct access to the owner - no call centers or automated systems</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">📊</div>
              <h3>Competitive Rates</h3>
              <p>Access to 50+ lenders to get you the best possible rate</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">⚡</div>
              <h3>Fast Closings</h3>
              <p>Average closing time of 30 days or less</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🎓</div>
              <h3>Expert Guidance</h3>
              <p>5+ years of experience working directly for you</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">💻</div>
              <h3>Online Tools</h3>
              <p>Easy online application and document upload</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🤝</div>
              <h3>Trusted Advisor</h3>
              <p>Building relationships, not just processing transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>READY TO START YOUR MORTGAGE JOURNEY?</h2>
            <p>Work directly with Harnoor to find the perfect loan solution for your needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">CONTACT US TODAY</Link>
              <Link to="/calculator" className="btn-secondary">TRY OUR CALCULATOR</Link>
            </div>
            <div className="personal-note">
              <p>✓ Direct access to the owner</p>
              <p>✓ Personalized attention from start to finish</p>
              <p>✓ No automated systems or call centers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;