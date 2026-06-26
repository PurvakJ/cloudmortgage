// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images
  const carouselImages = [
    {
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Residential Mortgages",
      subtitle: "⁠First Time Home Buyers, Primary Residence & Investment Properties",
      description: "Competitive rates and flexible terms tailored to get you into your dream home."
    },
    {
      url: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Commercial Financing",
      subtitle: "CMHC Insured Financing, Commercial Term Financing & Construction Loans",
      description: "From land acquisition to construction, we source the best commercial rates from over 20 lenders"
    },
    {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Banks Work for Banks. We Work for You",
      subtitle: "No Bias. No Agenda. Just Results.",
      description: "When you walk into a bank, you get their products. When you work with Oakmont Capital, you get 50+ lenders and an advisor whose only obligation is to you."
    },
    {
      url: "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Quick Approval",
      subtitle: "Fast, Simple & Hassle-Free Process",
      description: "Skip the back-and-forth — get pre-approved in 24 hours and move forward with confidence."
    }
  ];


  // Services data
  const services = [
    {
      icon: "🏡", // First home - matches First Time Home Buyer
      title: "First Time Home Buyer Program",
      description:
        "Stop renting. Start owning. We make your first mortgage simple, fast, and built entirely around you.",
      features: [
        "Low Down Payment Options",
        "First-Time Home Buyer Incentives",
        "Personalized Mortgage Guidance"
      ]
    },
    {
      icon: "💼", // Business/self-employed - matches Self-Employed Solutions
      title: "Self-Employed Mortgage Solutions",
      description:
        "Self-employed and ready to own? Access mortgage financing built specifically for Canadian business owners - no T4 required.",
      features: [
        "Alternative Income Verification",
        "Mortgage Solutions for Business Owners",
        "Flexible Qualification Requirements"
      ]
    },
    {
      icon: "💰", // Money/down payment - matches No Down Payment
      title: "No Down Payment Mortgage Solutions",
      description:
        "No down payment saved? There's still a path to homeownership, and we'll help you find it.",
      features: [
        "Zero Down Payment Programs",
        "Down Payment Assistance Options",
        "Expert Mortgage Planning"
      ]
    },
    {
      icon: "🏢", // Commercial building - matches Commercial Financing
      title: "Commercial Financing",
      description:
        "From small business acquisitions to large-scale developments, commercial mortgage solutions built around your goals and structured for success.",
      features: [
        "Commercial Property Financing",
        "Business Expansion Loans",
        "Customized Lending Solutions"
      ]
    },
    {
      icon: "🏘️", // Primary residence/home - matches Primary Residence Financing
      title: "Primary Residence Financing",
      description:
        "First home or fourth - if it's your primary residence, minimum down payment options are on the table. Every time.",
      features: [
        "Low Minimum Down Payment",
        "Competitive Mortgage Rates",
        "Flexible Repayment Terms"
      ]
    },
    {
      icon: "✅", // Approval/checkmark - matches Quick Pre-Approval
      title: "Quick Pre-Approval",
      description:
        "Get pre-approved in 24 hours and shop with confidence knowing your financing is secure.",
      features: [
        "Fast 24-Hour Pre-Approval",
        "Free Mortgage Consultation",
        "No Obligation Application"
      ]
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What credit score do I need to qualify for a mortgage?",
      answer: "In Canada, most lenders require a minimum credit score of 600 for insured mortgages and 680 for conventional mortgages. A stronger credit score not only improves your chances of approval but can also unlock better rates and terms."
    },
    {
      question: "How much down payment is required?",
      answer: "In Canada, the minimum down payment depends on the purchase price. Properties under $500,000 require a minimum of 5% down. For properties between $500,000 and $999,999, 5% is required on the first $500,000 and 10% on the remainder. Properties $1,000,000 and above require a minimum of 20% down and are not eligible for mortgage default insurance."
    },
    {
      question: "How long does the mortgage process take?",
      answer: "Pre-approval can typically be obtained within 24–48 hours. From there, the full mortgage approval and closing process generally takes 30–45 days, though this can vary depending on the lender, property type, and complexity of the application. Having your documents ready in advance can help move things along faster."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Image Carousel Section - Starts at top 0 */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div 
            className="carousel-slide"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-item">
                <div className="carousel-image-wrapper">
                  <img src={image.url} alt={image.title} className="carousel-image" loading={index === 0 ? "eager" : "lazy"} />
                  <div className="carousel-overlay">
                    <div className="carousel-content">
                      <h2 className="fade-up">{image.title}</h2>
                      <p className="fade-up">{image.subtitle}</p>
                      <a
                        href="https://velocity.newton.ca/sso/public.php?sc=ty3jfl5xj3cp"
                        className="btn-primary fade-up"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">❯</button>
          
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Mortgage Services Section - 3 in a row */}
      <section className="featured-services">
        <div className="container">
          <div className="section-header fade-up">
            <h2>POPULAR MORTGAGE SERVICES</h2>
            <p className="section-subtitle">Comprehensive solutions for every home financing need</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/services" className="service-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="fade-up">YOUR DREAM<br />HOME AWAITS</h1>
          <p className="fade-up">SMART MORTGAGE SOLUTIONS<br />TAILORED FOR YOU</p>
          <Link to="/calculator" className="btn-primary fade-up">GET STARTED</Link>
          <div className="rating fade-up">
            <span className="stars">★★★★★</span>
            <span className="rating-value">4.95</span>
            <span className="rating-label">Google Rating</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header fade-up">
            <h2 style={{ color: "white" }}>
              WHY CHOOSE OAKMONT CAPITAL?
            </h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.9)" }}>
              We're committed to your homeownership success
            </p>
          </div>
          <div className="features-grid">
            <div className="feature fade-up">
              <div className="feature-icon">📊</div>
              <h3>Best Rates Guaranteed</h3>
              <p>We compare rates from multiple lenders to get you the best deal</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">⚡</div>
              <h3>Fast Approval Process</h3>
              <p>Get approved quickly with our streamlined digital process</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🎯</div>
              <h3>Personalized Solutions</h3>
              <p>Tailored mortgage options based on your unique situation</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">🔒</div>
              <h3>Secure & Confidential</h3>
              <p>Your data is protected with bank-level security</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>Personal loan officer assigned to guide you through the process</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">📱</div>
              <h3>Digital Experience</h3>
              <p>Upload documents and track progress from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Preview Section */}
      <section className="calculator-preview">
        <div className="calculator-preview-content">
          <h2 className="fade-up">Calculate Your Mortgage Payment</h2>
          <p className="fade-up">Use our free calculator to estimate your monthly payments</p>
          <div className="calculator-features fade-up">
            <div className="calc-feature">✓ Estimate monthly payments</div>
            <div className="calc-feature">✓ Compare loan options</div>
            <div className="calc-feature">✓ See total interest costs</div>
          </div>
          <Link to="/calculator" className="btn-primary fade-up">Try Our Calculator →</Link>
        </div>
      </section>

      {/* Sticky Background Section */}
      <section className="sticky-background">
        <div className="sticky-background-image"></div>
        <div className="sticky-container">
          <div className="sticky-content">
            <h2 className="fade-up">MORTGAGE INDUSTRY LEADERS</h2>
            <p className="fade-up">Setting Standards in Service and Innovation</p>
            <div className="industry-stats fade-up">
              <div className="industry-stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="industry-stat">
                <span className="stat-number">$2B+</span>
                <span className="stat-label">Loans Funded</span>
              </div>
              <div className="industry-stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            <Link to="/about" className="btn-primary-outline fade-up">Learn More</Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="faq-preview">
        <div className="container">
          <div className="section-header fade-up">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <p className="section-subtitle">Answers to common mortgage questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-button">
            <Link to="/faqs" className="btn-secondary">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background"></div>
        <div className="cta-content">
          <h2 className="fade-up">READY TO START YOUR HOME JOURNEY?</h2>
          <p className="fade-up">Get pre-approved today and take the first step toward homeownership</p>
          <div className="cta-buttons fade-up">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/calculator" className="btn-secondary-outline">Calculate Payments</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;