// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images - Canadian focused
  const carouselImages = [
    {
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Residential Lending",
      subtitle: "First time home buyers, Primary Residence & Investment properties",
      description: "Get the best mortgage rates and flexible terms for your Canadian dream home"
    },
    {
      url: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Commercial Financing",
      subtitle: "Cmhc insured financing, Structured Financing & Construction loans",
      description: "Compare rates from 100+ Canadian lenders to find your perfect match"
    },
    {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Self-Employed Solutions",
      subtitle: "Alternative A Mortgages for Business for Self",
      description: "Professional mortgage solutions tailored for self-employed Canadians"
    },
    {
      url: "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Quick Canadian Approval",
      subtitle: "Fast & Hassle-Free Mortgage Process",
      description: "Get pre-approved in 24 hours with our streamlined Canadian mortgage process"
    }
  ];


  // Canadian Mortgage Services data based on your provided programs
  const services = [
    {
      icon: "🏠",
      title: "Refinance for Secondary Suites",
      description: "Enables homeowners to add secondary suites with insured refinancing options",
      features: ["Add rental income potential", "CMHC insured refinancing", "Increase property value"]
    },
    {
      icon: "🏢",
      title: "Investment Property Program",
      description: "Purchase additional investment properties with as little as 20% down",
      features: ["20% minimum down payment", "Qualified borrower program", "Expand your portfolio"]
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Plan Program",
      description: "Help immediate family members with good credit buy a home",
      features: ["Alternative GDSR/TDSR requirements", "Family guarantee options", "Support loved ones"]
    },
    {
      icon: "🏖️",
      title: "Vacation/Secondary Homes",
      description: "Purchase a second home with affordable monthly payments and just 5% down",
      features: ["Only 5% down payment", "Affordable monthly payments", "Vacation property financing"]
    },
    {
      icon: "💰",
      title: "Self-Directed RRSP",
      description: "Use self-directed RRSP/RRIF funds for non-arm's length mortgage investments",
      features: ["RRSP/RRIF fund utilization", "Non-arm's length investments", "Insurance provided"]
    },
    {
      icon: "💵",
      title: "Borrowed Down Payment",
      description: "Start building equity now even if you can't save the full down payment",
      features: ["Alternative down payment sources", "Start building equity sooner", "Flexible qualification"]
    }
  ];

  // Canadian FAQ data
  const faqs = [
    {
      question: "What is the minimum down payment for a home in Canada?",
      answer: "In Canada, the minimum down payment is 5% for homes under $500,000. For homes between $500,000 and $1 million, it's 5% on the first $500,000 and 10% on the remainder. Homes over $1 million require 20% down payment."
    },
    {
      question: "What is CMHC insurance and do I need it?",
      answer: "CMHC mortgage loan insurance is required for all Canadian home buyers with a down payment of less than 20%. It protects lenders against default and allows you to purchase with as little as 5% down."
    },
    {
      question: "What is the maximum amortization period in Canada?",
      answer: "For insured mortgages (less than 20% down), the maximum amortization period is 25 years. For uninsured mortgages (20%+ down), you may qualify for up to 30-year amortization."
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
            <h2>POPULAR CANADIAN MORTGAGE SERVICES</h2>
            <p className="section-subtitle">Comprehensive solutions for every Canadian home financing need</p>
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

      {/* Why Choose Us Section - Canadian Focus */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header fade-up">
            <h2 style={{ color: "black" }}>
              WHY CHOOSE OAKMONT CAPITAL?
            </h2>
            <p className="section-subtitle" style={{ color: "black" }}>
              Canada's trusted mortgage partner for over 25 years
            </p>
          </div>
          <div className="features-grid">
            <div className="feature fade-up">
              <div className="feature-icon">🍁</div>
              <h3>Canadian Experts</h3>
              <p>Specialized knowledge of Canadian mortgage regulations and CMHC requirements</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">⚡</div>
              <h3>Fast Canadian Approval</h3>
              <p>Get approved quickly with our streamlined digital process</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🎯</div>
              <h3>Personalized Solutions</h3>
              <p>Tailored mortgage options based on your unique Canadian situation</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">🔒</div>
              <h3>Secure & Confidential</h3>
              <p>Your data is protected with bank-level security compliant with Canadian standards</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>Personal mortgage agent assigned to guide you through the Canadian process</p>
            </div>
            <div className="feature fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">📱</div>
              <h3>Digital Experience</h3>
              <p>Upload documents and track progress from anywhere in Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="fade-up">YOUR CANADIAN<br />DREAM HOME AWAITS</h1>
          <p className="fade-up">SMART MORTGAGE SOLUTIONS<br />TAILORED FOR CANADIANS</p>
          <Link to="/calculator" className="btn-primary fade-up">GET STARTED</Link>
          <div className="rating fade-up">
            <span className="stars">★★★★★</span>
            <span className="rating-value">4.95</span>
            <span className="rating-label">Google Rating</span>
          </div>
        </div>
      </section>


      {/* Calculator Preview Section */}
      <section className="calculator-preview">
        <div className="calculator-preview-content">
          <h2 className="fade-up">Calculate Your Canadian Mortgage Payment</h2>
          <p className="fade-up">Use our free calculator to estimate your monthly payments, including CMHC insurance</p>
          <div className="calculator-features fade-up">
            <div className="calc-feature">✓ Estimate monthly payments with stress test</div>
            <div className="calc-feature">✓ Compare Canadian loan options</div>
            <div className="calc-feature">✓ Calculate CMHC insurance costs</div>
          </div>
          <Link to="/calculator" className="btn-primary fade-up">Try Our Calculator →</Link>
        </div>
      </section>

      {/* Sticky Background Section */}
      <section className="sticky-background">
        <div className="sticky-background-image"></div>
        <div className="sticky-container">
          <div className="sticky-content">
            <h2 className="fade-up">CANADA'S MORTGAGE INDUSTRY LEADERS</h2>
            <p className="fade-up">Setting Standards in Canadian Service and Innovation</p>
            <div className="industry-stats fade-up">
              <div className="industry-stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Canadian Excellence</span>
              </div>
              <div className="industry-stat">
                <span className="stat-number">$2B+</span>
                <span className="stat-label">Canadian Loans Funded</span>
              </div>
              <div className="industry-stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Canadian Clients</span>
              </div>
            </div>
            <Link to="/about" className="btn-primary-outline fade-up">Learn More</Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section - Canadian FAQs */}
      <section className="faq-preview">
        <div className="container">
          <div className="section-header fade-up">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <p className="section-subtitle">Answers to common Canadian mortgage questions</p>
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
          <h2 className="fade-up">READY TO START YOUR CANADIAN HOME JOURNEY?</h2>
          <p className="fade-up">Get pre-approved today and take the first step toward Canadian homeownership</p>
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