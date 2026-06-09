import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const observerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Refinance for Secondary Suites",
      description: "Enables lenders to offer an insured refinancing option for homeowners seeking to add secondary suites to their properties.",
      detailedDescription: "Adding a secondary suite to your property can create additional rental income and increase your home's value. Our insured refinancing option helps Canadian homeowners access the equity needed to finance suite conversions, from basement apartments to laneway homes.",
      keyBenefits: [
        "Access equity for suite construction",
        "CMHC insured refinancing",
        "Create additional rental income",
        "Increase property value",
        "Flexible refinance terms",
        "Expert guidance on suite regulations"
      ],
      process: [
        "Initial consultation to assess suite potential",
        "Equity evaluation and refinance calculation",
        "CMHC insurance application (if applicable)",
        "Refinance approval and funding",
        "Construction coordination support"
      ],
      whoCanApply: "Canadian homeowners with sufficient equity looking to add a secondary suite to their property.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 2,
      title: "Investment Property Program",
      description: "Provide qualified borrowers with the opportunity to purchase an additional investment property with as little as 20% down.",
      detailedDescription: "Expand your real estate portfolio with our specialized investment property program. Qualified Canadian borrowers can purchase additional investment properties with as little as 20% down, making it easier to build long-term wealth through real estate.",
      keyBenefits: [
        "As little as 20% down payment",
        "Rental income considered for qualification",
        "Multiple property financing available",
        "Competitive investment rates",
        "Portfolio growth strategy",
        "Refinance options for better cash flow"
      ],
      process: [
        "Investment strategy review",
        "Property cash flow analysis",
        "Down payment verification",
        "Lender matching and application",
        "Closing and property acquisition"
      ],
      whoCanApply: "Qualified Canadian borrowers looking to purchase additional investment properties.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 3,
      title: "Family Plan Program",
      description: "Help customers buy a home for immediate family with good credit who do not meet standard GDSR/TDSR requirements.",
      detailedDescription: "The Family Plan Program helps Canadian families support their loved ones in achieving homeownership. If your immediate family member has good credit but doesn't meet standard debt service ratio requirements, this program provides flexible solutions to help them buy a home.",
      keyBenefits: [
        "Alternative GDSR/TDSR requirements",
        "Family guarantee options",
        "Support immediate family members",
        "Good credit considered",
        "Flexible qualification criteria",
        "Path to homeownership"
      ],
      process: [
        "Family situation assessment",
        "Credit and income review",
        "Alternative qualification path",
        "Guarantee structure (if applicable)",
        "Approval and home purchase"
      ],
      whoCanApply: "Canadian families helping immediate family members with good credit but non-standard debt ratios.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 4,
      title: "Vacation/Secondary Homes",
      description: "Enable customers to purchase a second home at an affordable monthly payment with just 5% down.",
      detailedDescription: "Dreaming of a cottage, cabin, or vacation home? Our Vacation/Secondary Homes program makes it possible with just 5% down and affordable monthly payments. Whether it's a ski chalet, beach house, or lakefront retreat, we can help you finance your perfect getaway.",
      keyBenefits: [
        "Only 5% down payment",
        "Affordable monthly payments",
        "CMHC insured options available",
        "Cottages, cabins, and condos",
        "Rental potential considered",
        "Flexible qualification terms"
      ],
      process: [
        "Vacation property selection",
        "Down payment preparation",
        "Application and qualification",
        "Property appraisal",
        "Closing and enjoying your retreat"
      ],
      whoCanApply: "Canadian buyers looking to purchase a secondary or vacation home.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 5,
      title: "Self-Directed RRSP",
      description: "Provide the insurance to allow self-directed RRSP/RRIF funds to be used for non-arm's length mortgage investments.",
      detailedDescription: "Unlock the potential of your retirement savings with our Self-Directed RRSP program. This specialized solution provides insurance that allows you to use self-directed RRSP or RRIF funds for non-arm's length mortgage investments, creating new opportunities for your retirement portfolio.",
      keyBenefits: [
        "RRSP/RRIF fund utilization",
        "Non-arm's length investments",
        "Insurance coverage provided",
        "Portfolio diversification",
        "Tax-efficient investing",
        "Professional guidance available"
      ],
      process: [
        "RRSP/RRIF assessment",
        "Investment strategy development",
        "Insurance application",
        "Fund transfer coordination",
        "Ongoing portfolio management"
      ],
      whoCanApply: "Canadian investors with self-directed RRSP/RRIF accounts looking for mortgage investment opportunities.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 6,
      title: "Borrowed Down Payment",
      description: "Make it possible for borrowers who cannot save a required down payment to start building equity now.",
      detailedDescription: "Don't let a lack of saved down payment hold you back from homeownership. Our Borrowed Down Payment program helps Canadian buyers who struggle to save the required down payment to start building equity now, with flexible solutions that recognize alternative down payment sources.",
      keyBenefits: [
        "Alternative down payment sources",
        "Start building equity sooner",
        "Flexible qualification criteria",
        "Gifted down payment options",
        "RRSP borrowing strategies",
        "Path to homeownership"
      ],
      process: [
        "Financial situation assessment",
        "Down payment source identification",
        "Alternative qualification review",
        "Application and approval",
        "Home purchase and equity building"
      ],
      whoCanApply: "Canadian home buyers who cannot save a traditional down payment but have alternative sources.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 7,
      title: "Second Mortgage Program",
      description: "Provide borrowers with a Second Mortgage to be registered against their property up to 95% combined LTV on a purchase.",
      detailedDescription: "Access additional funds with our Second Mortgage Program. This solution allows Canadian borrowers to register a second mortgage against their property up to 95% combined loan-to-value on a purchase, providing access to equity without disturbing your first mortgage terms.",
      keyBenefits: [
        "Up to 95% combined LTV",
        "Preserve first mortgage terms",
        "Quick access to funds",
        "Flexible repayment options",
        "Competitive second mortgage rates",
        "Purchase or refinance options"
      ],
      process: [
        "Equity and LTV assessment",
        "First mortgage review",
        "Second mortgage application",
        "Property registration",
        "Fund disbursement"
      ],
      whoCanApply: "Canadian homeowners or buyers needing additional financing up to 95% combined LTV.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 8,
      title: "Portability Feature",
      description: "Help Sagen-insured borrowers to save on the costs of a new mortgage by 'porting' their mortgage default insurance.",
      detailedDescription: "Moving to a new home? Save thousands with our Portability Feature. Sagen-insured Canadian borrowers can transfer or 'port' their mortgage default insurance to a new property, avoiding the cost of purchasing new insurance and keeping your favorable terms intact.",
      keyBenefits: [
        "Save on new insurance costs",
        "Port your default insurance",
        "Keep favorable mortgage terms",
        "Seamless transition to new home",
        "Avoid duplicate insurance payments",
        "Expert porting guidance"
      ],
      process: [
        "Current mortgage and insurance review",
        "New property evaluation",
        "Porting application submission",
        "Insurance transfer coordination",
        "New home closing"
      ],
      whoCanApply: "Sagen-insured Canadian borrowers moving to a new home who want to port their insurance.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 9,
      title: "Business for Self (Alt. A)",
      description: "Secure mortgage insurance for self-employed borrowers without traditional income who manage their finances responsibly.",
      detailedDescription: "Being self-employed shouldn't prevent you from getting a great mortgage. Our Business for Self (Alt. A) program provides mortgage insurance for Canadian self-employed borrowers who may not have traditional income documentation but manage their finances responsibly.",
      keyBenefits: [
        "Alternative income verification",
        "Bank statement programs",
        "Lower documentation requirements",
        "Business assets considered",
        "Flexible qualification criteria",
        "Secure insurance coverage"
      ],
      process: [
        "Business financial review",
        "Alternative documentation collection",
        "Insurance application",
        "Lender matching",
        "Approval and funding"
      ],
      whoCanApply: "Self-employed Canadians with 2+ years in business who manage their finances responsibly.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 10,
      title: "Energy Efficient Housing Program",
      description: "Reward home buyers purchasing energy-efficient homes or making energy saving renovations with significant savings.",
      detailedDescription: "Go green and save green with our Energy Efficient Housing Program. Canadian home buyers who purchase energy-efficient homes or make energy-saving renovations qualify for significant savings, including better rates and insurance premium refunds.",
      keyBenefits: [
        "Significant premium savings",
        "Better mortgage rates available",
        "Energy-efficient home rewards",
        "Renovation financing options",
        "CMHC Eco Plus benefits",
        "Lower monthly payments"
      ],
      process: [
        "Energy assessment or EnerGuide rating",
        "Energy-efficient purchase/renovation plan",
        "Application with energy documentation",
        "Premium savings calculation",
        "Approval and funding"
      ],
      whoCanApply: "Canadian home buyers purchasing energy-efficient homes or making energy-saving renovations.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 11,
      title: "Progress Advance Program",
      description: "Let residential home builders and individual home buyers take advantage of insured progress advances while their property is being built.",
      detailedDescription: "Building your dream home? Our Progress Advance Program provides insured progress advances during construction, ensuring you have the funds you need at each stage of building. Perfect for custom home builders and individual home buyers constructing their own property.",
      keyBenefits: [
        "Insured progress advances",
        "Construction stage funding",
        "Custom home builder friendly",
        "Individual home buyer options",
        "Draw schedule flexibility",
        "Completion protection"
      ],
      process: [
        "Construction plan review",
        "Draw schedule establishment",
        "Progress advance setup",
        "Stage-by-stage funding",
        "Final completion draw"
      ],
      whoCanApply: "Canadian residential home builders and individual home buyers constructing a property.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 12,
      title: "Purchase Plus Improvements",
      description: "Help qualified home buyers roll home improvement costs into their mortgage with as little as 5% down.",
      detailedDescription: "Buy a home that needs some TLC and finance the renovations too! Our Purchase Plus Improvements program allows qualified Canadian home buyers to roll home improvement costs into their mortgage with as little as 5% down, making fixer-uppers more accessible than ever.",
      keyBenefits: [
        "Only 5% down payment",
        "Renovation costs rolled into mortgage",
        "One simple monthly payment",
        "CMHC insured options",
        "Fixer-upper friendly",
        "Instant home equity building"
      ],
      process: [
        "Property and renovation assessment",
        "Renovation quote collection",
        "Combined mortgage application",
        "Approval with improvement funds",
        "Purchase and renovation completion"
      ],
      whoCanApply: "Qualified Canadian home buyers purchasing homes needing improvements.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    }
  ];

  // Optimized Intersection Observer for scroll animations with requestAnimationFrame
  useEffect(() => {
    const options = {
      threshold: 0.15,
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

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleBookAppointment = () => {
    navigate('/contact');
    closeModal();
  };

  const handleTryCalculator = () => {
    navigate('/calculator');
    closeModal();
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = '';
  };

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  // Get service icon
  const getServiceIcon = (id) => {
    const icons = {
      1: "🏠", 2: "🏘️", 3: "👨‍👩‍👧‍👦", 4: "🏖️", 5: "💰",
      6: "💵", 7: "📝", 8: "🔄", 9: "💼", 10: "🌱",
      11: "🏗️", 12: "🔨"
    };
    return icons[id] || "🏦";
  };

  return (
    <div className="services-page">
      {/* Hero Section - Full width image with 1500px content constraint */}
      <div className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-image" aria-label="Mortgage services hero background"></div>
        <div className="services-hero-container">
          <div className="services-hero-content">
            <h1 className="fade-up">Oakmont Capital Services</h1>
            <p className="fade-up">Comprehensive Canadian mortgage solutions tailored to your unique needs</p>
            <div className="hero-stats fade-up">
              <div className="hero-stat">
                <span className="hero-stat-number">25+</span>
                <span className="hero-stat-label">Years of Canadian Excellence</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">5,000+</span>
                <span className="hero-stat-label">Happy Canadian Clients</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">$2B+</span>
                <span className="hero-stat-label">Canadian Loans Funded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Grid - Contained at 1500px */}
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card fade-up" 
              style={{ animationDelay: `${Math.min(index * 0.03, 0.5)}s` }}
            >
              <div className="service-icon">{getServiceIcon(service.id)}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button 
                className="service-button"
                onClick={() => openModal(service)}
                aria-label={`View details for ${service.title}`}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed Service View */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            
            <div className="modal-header">
              <div className="modal-icon">{getServiceIcon(selectedService.id)}</div>
              <h2 className="modal-title">{selectedService.title}</h2>
              <p className="modal-subtitle">About This Canadian Mortgage Service</p>
            </div>
            
            <div className="modal-body">
              <p className="service-detailed-description">{selectedService.detailedDescription}</p>
              
              <div className="service-section">
                <h3 className="section-title">Key Benefits</h3>
                <ul className="benefits-list">
                  {selectedService.keyBenefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-section">
                <h3 className="section-title">Our Process</h3>
                <div className="process-steps">
                  {selectedService.process.map((step, idx) => (
                    <div key={idx} className="process-step">
                      <div className="step-number">{idx + 1}</div>
                      <div className="step-text">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="service-section">
                <h3 className="section-title">Who Can Apply?</h3>
                <p className="who-can-apply">{selectedService.whoCanApply}</p>
              </div>
              
              <div className="service-section contact-section">
                <h3 className="section-title">Ready to Get Started?</h3>
                <p className="contact-message">
                  Book a free consultation to discuss your Canadian mortgage needs and explore the best options for you.
                </p>
                
                <div className="action-buttons">
                  <button 
                    className="btn-appointment"
                    onClick={handleBookAppointment}
                  >
                    Book an Appointment
                  </button>
                  <button 
                    className="btn-calculator"
                    onClick={handleTryCalculator}
                  >
                    Try Our Calculator
                  </button>
                </div>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">Have Questions?</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">{selectedService.contactInfo.phone}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">{selectedService.contactInfo.email}</span>
                  </div>
                </div>
                
                <p className="disclaimer-note">
                  Note: Every Canadian mortgage situation is unique. The information provided here is general in nature. 
                  Book a consultation for personalized advice tailored to your specific circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;