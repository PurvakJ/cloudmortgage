// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images for mortgage services
  const carouselImages = [
    {
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Dream Home Financing",
      subtitle: "Making Homeownership Accessible",
      description: "Get the best rates and flexible terms for your dream home"
    },
    {
      url: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Best Mortgage Rates",
      subtitle: "Competitive Rates, Flexible Terms",
      description: "Compare rates from 100+ lenders to find your perfect match"
    },
    {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Expert Guidance",
      subtitle: "Your Trusted Mortgage Partner",
      description: "Professional advisors guide you every step of the way"
    },
    {
      url: "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Quick Approval",
      subtitle: "Fast & Hassle-Free Process",
      description: "Get pre-approved in 24 hours with our streamlined process"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      role: "First-Time Home Buyer",
      text: "MortgageCloud made my first home purchase seamless. Their team guided me through every step and got me an amazing rate!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Refinancing with MortgageCloud saved me over $500/month. The process was quick and the team was incredibly helpful.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Real Estate Investor",
      text: "As an investor, I need reliable financing. MortgageCloud delivers every time with competitive rates and fast closings.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Homeowner",
      text: "The team at MortgageCloud went above and beyond to help us secure our dream home. Highly recommend!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      name: "James Wilson",
      role: "First-Time Buyer",
      text: "Excellent service from start to finish. They made the complex mortgage process easy to understand.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Investor",
      text: "Best mortgage broker experience I've ever had. Competitive rates and exceptional customer service.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
  ];

  // Services data
  const services = [
    {
      icon: "🏠",
      title: "First-Time Home Buyers",
      description: "Expert guidance and special programs for first-time buyers",
      features: ["Low down payment options", "Down payment assistance", "Free credit counseling"]
    },
    {
      icon: "🔄",
      title: "Mortgage Refinancing",
      description: "Lower your payments and save money with refinancing",
      features: ["Rate reduction", "Cash-out options", "Lower monthly payments"]
    },
    {
      icon: "⚡",
      title: "Quick Pre-Approval",
      description: "Get pre-approved in 24 hours and shop with confidence",
      features: ["24-hour approval", "Free consultation", "No obligation"]
    },
    {
      icon: "💰",
      title: "Debt Consolidation",
      description: "Combine debts into one manageable payment",
      features: ["Lower interest rates", "Single payment", "Improve credit score"]
    },
    {
      icon: "🏘️",
      title: "Jumbo Loans",
      description: "Financing for high-value properties",
      features: ["Up to $3M loans", "Competitive rates", "Flexible terms"]
    },
    {
      icon: "🇺🇸",
      title: "VA Loans",
      description: "Exclusive benefits for veterans and military",
      features: ["0% down payment", "No PMI", "Lower rates"]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What credit score do I need to qualify for a mortgage?",
      answer: "Most conventional loans require a minimum credit score of 620. FHA loans may accept scores as low as 580, and VA loans have no minimum credit score requirement. We'll help you find the best option for your situation."
    },
    {
      question: "How much down payment is required?",
      answer: "Down payments can range from 0% (VA and USDA loans) to 20% or more for conventional loans. First-time home buyers may qualify for programs with as little as 3% down. We'll help you find the best option based on your financial situation."
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

  return (
    <div className="home">
      {/* Image Carousel Section */}
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
                      <h2>{image.title}</h2>
                      <p>{image.subtitle}</p>
                      <a
  href="https://velocity.newton.ca/sso/public.php?sc=ty3jfl5xj3cp"
  className="btn-primary"
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


            {/* Featured Services Section */}
            <section className="featured-services">
        <div className="container">
          <h2>POPULAR MORTGAGE SERVICES</h2>
          <p className="section-subtitle">Comprehensive solutions for every home financing need</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
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
          <h1>YOUR DREAM<br />HOME AWAITS</h1>
          <p>SMART MORTGAGE SOLUTIONS<br />TAILORED FOR YOU</p>
          <Link to="/calculator" className="btn-primary">GET STARTED</Link>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="rating-value">4.95</span>
            <span className="rating-label">Google Rating</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>WHY CHOOSE MORTGAGECLOUD?</h2>
          <p className="section-subtitle">We're committed to your homeownership success</p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📊</div>
              <h3>Best Rates Guaranteed</h3>
              <p>We compare rates from multiple lenders to get you the best deal</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Approval Process</h3>
              <p>Get approved quickly with our streamlined digital process</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Solutions</h3>
              <p>Tailored mortgage options based on your unique situation</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Confidential</h3>
              <p>Your data is protected with bank-level security</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>Personal loan officer assigned to guide you through the process</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Digital Experience</h3>
              <p>Upload documents and track progress from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>WHAT OUR CLIENTS SAY</h2>
          <p className="testimonials-subtitle">Real stories from happy homeowners</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">{"★".repeat(testimonial.rating)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div className="testimonial-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Preview Section */}
      <section className="calculator-preview">
        <div className="calculator-preview-content">
          <h2>Calculate Your Mortgage Payment</h2>
          <p>Use our free calculator to estimate your monthly payments</p>
          <div className="calculator-features">
            <div className="calc-feature">✓ Estimate monthly payments</div>
            <div className="calc-feature">✓ Compare loan options</div>
            <div className="calc-feature">✓ See total interest costs</div>
          </div>
          <Link to="/calculator" className="btn-primary">Try Our Calculator →</Link>
        </div>
      </section>

            {/* Sticky Background Section */}
            <section className="sticky-background">
        <div className="sticky-background-image"></div>
        <div className="sticky-container">
          <div className="sticky-content">
            <h2>MORTGAGE INDUSTRY LEADERS</h2>
            <p>Setting Standards in Service and Innovation</p>
            <div className="industry-stats">
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
            <Link to="/about" className="btn-primary-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="faq-preview">
        <div className="container">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-subtitle">Answers to common mortgage questions</p>
          <div className="faq-grid">
            {faqs.slice(0, 3).map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-button" style={{color:"#1e3c72"}}>
            <Link to="/faqs" className="btn-secondary" style={{color:"black"}}>View All FAQs</Link>
            </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background"></div>
        <div className="cta-content">
          <h2>READY TO START YOUR HOME JOURNEY?</h2>
          <p style={{color:"white"}}>Get pre-approved today and take the first step toward homeownership</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/calculator" className="btn-secondary-outline">Calculate Payments</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;