import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Owner/Founder data - Single leader who handles everything
  const ownerData = {
    id: 1,
    name: "Harnoor Deol",
    position: "Founder & Mortgage Specialist",
    image: "https://res.cloudinary.com/dm9gg8yss/image/upload/v1782445550/DSC05671_Large_hm1gfv.png",
    bio: "Oakmont Capital was founded on a simple belief — that every Canadian deserves expert mortgage guidance without the runaround. With a personal approach and an unwavering commitment to client success, Harnoor has become a trusted partner for families across Canada on their journey to homeownership.",
    expertise: [
      "Certified Mortgage Professional",
      "Commercial Financing",
      "First-Time Home Buyer Specialist",
      "Refinance and Debt Consolidation",
      "Self-Employed Mortgage Solutions",
      "B-side solutions for clients with unique financial situations",
    ],
    philosophy: "Big banks offer products. I offers solutions. By taking the time to understand each client's unique financial picture, we deliver the kind of personalized, transparent mortgage guidance that corporate lenders simply can't match.",
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
          <p>Your Trusted Mortgage Advisor</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>OUR STORY</h2>
              <p>Oakmont Capital was founded to do one thing differently — put Canadians first.</p>
              <p>Frustrated by an industry built on complexity and corporate indifference, the vision was simple: bring transparency, accessibility, and genuine personal service to Canadian home financing. Today, hundreds of homeowners across Canada trust Oakmont Capital for exactly that.</p>
              <p>Every client works directly with a Trusted Mortgage Specialist. Every solution is tailored. And every decision is made with one goal in mind — getting Canadians into the right mortgage for their life."
</p>
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
              <p>To cut through the complexity of the Canadian mortgage market and deliver honest, personalized guidance that puts every client in the best possible position to own their home.</p>
            </div>
            <div className="vision-card">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To redefine what Canadians expect from a mortgage broker — building a platform where trust, innovation, and genuine client advocacy set the standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner/Founder Section - Personal Touch */}
      <section className="owner-section">
        <div className="container">
          <h2>MEET YOUR MORTGAGE EXPERT</h2>
          
          <div className="owner-content">
            <div className="owner-image">
              <img src={ownerData.image} alt={ownerData.name} />
              <div className="owner-badge">
                <span>⭐</span>
                <span>Your Trusted Mortgage Advisor</span>
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
          <p className="values-subtitle">What we stand for and how we show up for you</p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Integrity First</h3>
              <p>Complete transparency and honesty in every mortgage transaction, every time.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>We Work For You, Not the Bank</h3>
              <p>Your success is our success. Everything we do is built around your unique needs and goals.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Smarter tools and better processes — continuously refined to serve Canadian clients more effectively.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Personalized Solutions</h3>
              <p>No call centers. No cookie-cutter answers. Just direct, one-on-one guidance built around your goals.</p>
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
              <span className="stat-label"> Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$50M+</span>
              <span className="stat-label">Annual Mortgages Funded</span>
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
              <div className="choose-icon">🏙️</div>
              <h3>Full-Spectrum Mortgage Expertise</h3>
              <p>Residential, commercial, self-employed, refinancing — expertise that covers every type of Canadian mortgage client.</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🍁</div>
              <h3>Your Advocate, Not the Bank's</h3>
              <p>Banks work for shareholders. Oakmont Capital works for you — honest, unbiased guidance built entirely around your goals.</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🏛️</div>
              <h3>50+ Lenders, Better Rates</h3>
              <p>More lenders means more competition for your business — and better rates and terms for you.</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">💡</div>
              <h3>Creative Solutions for Every Client</h3>
              <p>Straightforward or complex, every situation has a solution and we won't stop until we find it.</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">⚡</div>
              <h3>Speed without Sacrifice</h3>
              <p>Fast pre-approvals and an efficient process from start to finish — without cutting corners on finding you the best deal.</p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🤝</div>
              <h3>Built on Trust, Not Transactions</h3>
              <p>A mortgage is one of the biggest financial decisions of your life — you deserve an advisor who treats it that way, long after the deal is done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>READY TO START YOUR MORTGAGE JOURNEY?</h2>
            <p>Skip the middlemen — work one-on-one with an expert who knows the Canadian mortgage market inside and out.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">CONTACT US TODAY</Link>
              <Link to="/calculator" className="btn-secondary">TRY OUR CALCULATOR</Link>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default About;