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
      title: "Refinance & Equity Take-Out (ETO)",
      logo: "🏠", // Home/equity icon
      description: "Your home has built-up equity, put it to work with a refinance solution tailored to your financial goals.",
      detailedDescription: "Refinancing isn't just about lowering your rate, it's about unlocking the financial potential already sitting in your home. From debt consolidation and renovations to secondary suite additions and investment opportunities, our equity take-out solutions give Canadian homeowners the flexibility to access their equity on their terms.",
      keyBenefits: [
        "Unlock home equity for your goals",
        "Lower your existing mortgage rate",
        "Consolidate high-interest debt",
        "Finance renovations or suite additions",
        "Access up to 80% of your home's value",
        "Tailored solutions for every financial need"
      ],
      process: [
        "Consultation to assess your equity and refinance options",
        "Equity evaluation and refinance calculation",
        "Lender shopping and mortgage structuring",
        "Application, approval and funding",
        "Ongoing support post-closing"
      ],
      whoCanApply: "Any Canadian homeowner with sufficient equity looking to unlock their home's value — whether for renovations, debt consolidation, investments, or suite additions.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 2,
      title: "Investment Property Financing",
      logo: "📈", // Investment/growth icon
      description: "Grow your real estate portfolio with specialized financing designed for Canadian investors, starting with as little as 20% down",
      detailedDescription: "Real estate is one of Canada's most powerful wealth-building tools, and the right financing strategy makes all the difference. Whether you're purchasing your first investment property or expanding an existing portfolio, our investment property program gives qualified Canadian borrowers access to competitive rates, flexible terms, and expert guidance to maximize long-term returns.",
      keyBenefits: [
        "As little as 20% down payment",
        "Rental income considered for qualification",
        "Finance upto 4 units in a single property",
        "Competitive rates across 50+ lenders",
        "Cash flow and Portfolio optimization",
        "Expert guidance for real estate investors"
      ],
      process: [
        "Investment goals and strategy review",
        "Property cash flow and affordability analysis",
        "Down payment and qualification verification",
        "Lender shopping and Mortgage structuring",
        "Closing coordination and property acquisition"
      ],
      whoCanApply: "Any qualified Canadian borrower ready to purchase an investment property, from first-time investors building their first rental to seasoned investors expanding their portfolio.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 12,
      title: "Quick Pre-Approval",
      logo: "✅", // Approval/checkmark icon
      description:
        "Get pre-approved in as little as 24 hours and start shopping for your new home with confidence, knowing exactly how much you can afford.",
      detailedDescription:
        "A mortgage pre-approval is the first step toward buying a home. It provides an estimate of how much you can borrow based on your income, credit, and financial profile. With a quick pre-approval, you'll have a clear budget, stronger negotiating power, and greater confidence when making an offer. Our mortgage experts guide you through the entire process, ensuring a fast, accurate, and hassle-free experience.",
      keyBenefits: [
        "Pre-approval in as little as 24 hours",
        "Know your maximum home buying budget",
        "Lock in competitive interest rates for a limited time",
        "Strengthen your offer when purchasing a home",
        "No obligation and no hidden fees",
        "Expert guidance from experienced mortgage professionals"
      ],
      process: [
        "Complete a simple online or phone application",
        "Submit basic income and financial documents",
        "Credit and affordability assessment",
        "Receive your mortgage pre-approval",
        "Start shopping for your home with confidence"
      ],
      whoCanApply:
        "Anyone planning to purchase a home in Canada, including first-time home buyers, repeat buyers, newcomers, and self-employed individuals looking to understand their borrowing capacity before house hunting.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 11,
      title: "Canada Small Business Financing Program",
      logo: "🏦", // Bank/government program icon
      description:
        "Secure the funding your business needs through government-backed financing designed to help Canadian entrepreneurs start, expand, or modernize their businesses.",
      detailedDescription:
        "The Canada Small Business Financing Program (CSBFP) helps small businesses gain access to financing by reducing the risk for lenders. Whether you're purchasing equipment, renovating commercial property, buying leasehold improvements, or expanding operations, this program can make it easier to qualify for the funding your business needs. We work with you to understand your goals, prepare your application, and connect you with lenders offering competitive financing solutions.",
      keyBenefits: [
        "Government-backed financing for eligible small businesses",
        "Finance equipment, leasehold improvements, and commercial property",
        "Competitive interest rates and flexible repayment options",
        "Higher approval potential through participating lenders",
        "Ideal for business expansion, modernization, or startup growth",
        "Professional guidance throughout the application process"
      ],
      process: [
        "Initial consultation to assess your financing needs",
        "Review business eligibility and required documentation",
        "Prepare and submit the financing application",
        "Match your business with participating lenders",
        "Loan approval, funding, and ongoing support"
      ],
      whoCanApply:
        "Canadian small business owners, entrepreneurs, and startups seeking financing for purchasing equipment, leasehold improvements, commercial property, or business expansion, subject to lender and program eligibility requirements.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 3,
      title: "Commercial Financing",
      logo: "🏢", // Commercial building icon
      description: "From small business acquisitions to large-scale developments, commercial mortgage solutions built around your goals and structured for success.",
      detailedDescription: "Commercial financing is complex, but it doesn't have to be complicated. At Oakmont Capital, we specialize in structuring commercial mortgage solutions that align with your business objectives, whether you're acquiring a new property, breaking ground on a development, or refinancing an existing commercial asset to improve cash flow. With access to multiple lenders and deep knowledge of the Canadian commercial lending landscape, we find the right solution every time.",
      keyBenefits: [
        "Office, retail, industrial, and multi-unit property financing",
        "CMHC insured and conventional financing options",
        "Competitive commercial rates across 100+ lenders",
        "Construction, development, and bridge financing",
        "Refinancing to optimize returns and reduce costs",
        "Tailored solutions for complex commercial deals"
      ],
      process: [
        "Consultation to assess your commercial goals and financing needs",
        "Deal structuring, cash flow analysis, and property valuation review",
        "Commercial lender matching and mortgage structuring",
        "Application submission, negotiation, and approval coordination",
        "Closing coordination and ongoing post-funding support"
      ],
      whoCanApply: "Canadian business owners, real estate investors, and developers of all sizes — from entrepreneurs acquiring their first commercial property to seasoned investors and developers managing large-scale commercial portfolios.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 4,
      title: "First Time Home Buyer Program",
      logo: "🏡", // First home icon
      description: "Stop renting. Start owning. We make your first mortgage simple, fast, and built entirely around you.",
      detailedDescription: "The Canadian mortgage market can feel overwhelming, especially the first time. That's exactly why we're here. We cut through the complexity, match you with the right program, and fight for the best rate across 50+ lenders so your first home purchase is something to celebrate, not stress over.",
      keyBenefits: [
        "Minimum 5% down payment",
        "First Home Savings Account (FHSA) eligible",
        "RRSP Home Buyers' Plan access",
        "We find the lender that fits you, not the one that's easiest",
        "Pre-approved in as little as 24 hours",
        "No jargon — just clear, honest advice"
      ],
      process: [
        "Free, no-obligation consultation",
        "Pre-approval within 24 hours",
        "First-time buyer program matching",
        "Lender shopping for the best rate",
        "Seamless closing from offer to keys"
      ],
      whoCanApply: "First-time buyers across Canada,  including those qualifying under FTHB program guidelines due to separation or divorce",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 5,
      title: "Self-Employed Mortgage Solutions",
      logo: "💼", // Business/self-employed icon
      description: "Self-employed and ready to own? Access mortgage financing built specifically for Canadian business owners - no T4 required.",
      detailedDescription: "Being self-employed shouldn't stand between you and homeownership. Throug Business for Self program, self-employed Canadians with a minimum 2-year business history and responsible credit management can access insured mortgage financing without traditional income documentation, just a stated income and proof of your business.",
      keyBenefits: [
        "No T4 or employment letter required",
        "Stated income qualification",
        "Minimum 10% down payment",
        "2-year business history or experience in the same field required",
        "Available for sole proprietors, partnerships, and corporations",
        "Specialist lender matching for self-employed borrowers"
      ],
      process: [
        "Consultation to assess your business history and qualification options",
        "Business Finacial Statement's review and stated income assessment",
        "Specialist lender matching across 50+ lenders",
        "Application, insurer approval, and commitment coordination",
        "Seamless closing from approval to funding"
      ],
      whoCanApply: "Any self-employed Canadian — sole proprietor, partner, or incorporated business owner,  with 2+ years in the same field, responsible credit history, and no outstanding tax arrears.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 6,
      title: "No Down Payment Mortgage Solutions",
      logo: "💰", // Money/down payment icon
      description: "No down payment saved? There's still a path to homeownership, and we'll help you find it.",
      detailedDescription: "There are more ways to fund a down payment than most buyers realize. Gifts, RRSP funds, FHSA contributions, and even borrowed funds from a Line of Credit or Credit Card are all eligible — provided the borrowed amount fits within your GDS and TDS debt servicing ratios. We'll identify the right path and get you moving.",
      keyBenefits: [
        "Gifted down payment accepted from immediate family",   
        "RRSP Home Buyers' Plan, up to $35,000 tax-free",
        "First Home Savings Account (FHSA) eligible",
        "Line of Credit and Credit Card funds eligible toward down payment",
        "Borrowed funds accepted within GDS/TDS debt servicing ratios",
        "Tailored strategy across 50+ lenders"
      ],
      process: [
        "Consultation to understand your financial position and down payment options",
        "Down payment strategy and debt servicing ratio assessment",
        "Debt servicing ratio review to confirm borrowed funds eligibility",
        "Lender selection, application, and approval coordination",
        "Seamless closing, from strategy to keys in hand"   
      ],
      whoCanApply: "Any Canadian home buyer without traditional down payment savings who has access to alternative sources, including family gifts, RRSP or FHSA funds, a Line of Credit, or Credit Card",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 7,
      title: "B-side Mortgage Solutions",
      logo: "🔑", // Key/access icon
      description: "Bruised credit. High debt. Low declared income. Whatever your situation, there's a mortgage solution built for you.",
      detailedDescription: "The big banks say no? We find lenderswho says yes. B-side mortgages are built for Canadians whose financial history doesn't fit the traditional lending box. Bruised credit, high debt, low declared income, or a recent Consumer Proposal — there's a structured path forward. Minimum 20% down required, with a portion eligible to be borrowed.",
      keyBenefits: [
        "Bruised or damaged credit accepted",
        "Consumer Proposals — recently discharged or completed considered",
        "High debt loads and elevated TDS ratios accommodated",
        "Low declared or stated income accepted",
        "Minimum 20% down — portion eligible to be borrowed",
        "Clear pathway back to prime mortgage lending"
      ],
      process: [
        "Confidential, judgment-free consultation to understand your situation",
        "Full credit, debt, and income profile review",
        "Down payment strategy and source verification",
        "Alternative lender matching based on your specific profile",
        "Seamless application, approval, and closing support"
      ],
      whoCanApply: "Any Canadian borrower who has been declined by traditional lenders due to bruised credit, high debt, low declared income, or a recent Consumer Proposal, with a minimum 20% down payment available, including borrowed funds.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 8,
      title: "Primary Residence Financing",
      logo: "🏘️", // Primary home icon
      description: "First home or fourth - if it's your primary residence, minimum down payment options are on the table. Every time.",
      detailedDescription: "Let's bust a myth. Most Canadians believe the minimum down payment is a one-time privilege reserved for first-time buyers. It's not. The minimum down payment is tied to the property — not the buyer's history. As long as you are purchasing a primary residence, you qualify for minimum down payment options — whether it's your second home, or third. Stop letting outdated assumptions limit your options.",
      keyBenefits: [
        "Minimum down payment available on every primary residence — not just your first",
        "5% minimum on properties under $500,000",
        "5% on first $500,000 and 10% on remainder up to $999,999",
        "20% required on properties $1,000,000 and above",
        "Retire in your dream home with minimal upfront costs",
        "Competitive rates across 50+ lenders"
      ],
      process: [
        "Consultation to review your purchase goals and down payment position",
        "Pre-approval and stress test qualification review",
        "Lender shopping for the best rates and terms",
        "Application, approval, and commitment coordination",
        "Closing support from offer accepted to keys in hand"
      ],
      whoCanApply: "Any Canadian purchasing a primary residence, regardless of whether you've owned before. If it's your primary home, minimum down payment options apply.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 9,
      title: "Purchase Plus Improvements Mortgage",
      logo: "🔨", // Renovation/improvement icon
      description: "See potential where others see problems, buy the home and fund the renovations in one smart mortgage solution.",
      detailedDescription: "Stop waiting for the perfect home,  build it. Bundle eligible renovation costs directly into your mortgage and skip the separate loan entirely. Adding a legal basement suite is one of the smartest moves available, it adds long-term rental income and increases your mortgage affordability by 3–4% by factoring projected rental income into your qualification.",
      keyBenefits: [
        "Renovation costs bundled directly into your mortgage",
        "Fund value-adding upgrades without a separate loan ",
        "Legal suite addition boosts mortgage affordability by 3–4%",
        "Projected rental income from legal suite used for qualification",
        "Increase property value from day one",
        "Available on insured mortgages"
      ],
      process: [
        "Consultation to assess purchase goals and renovation scope",
        "Renovation estimate and post-improvement value assessment",
        "Mortgage structuring with improvement costs included",
        "Lender matching and application submission",
        "Renovation funds released upon completion and inspection"
      ],
      whoCanApply: "Any Canadian homebuyer purchasing a property with plans for eligible value-adding renovations — from legal basement suites and kitchen upgrades to structural improvements that increase the property's appraised value.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
    {
      id: 10,
      title: "Mortgage Renewals & HELOC",
      logo: "🔄", // Renewal/cycle icon
      description: "Two of the most powerful financial tools available to Canadian homeowners, and most people don't use either one to their full advantage.",
      detailedDescription: "Whether your mortgage is coming up for renewal or you're looking to access the equity you've built, both are significant financial opportunities that most Canadians underutilize. Don't auto-renew with your existing lender without shopping — it could cost you thousands. And if you've built equity in your home, a HELOC gives you flexible, low-interest access to those funds without selling or refinancing. We help you maximize both.",
      keyBenefits: [
        "Shop renewal rates across 50+ lenders, never auto-renew blind",
        "Switch lenders at renewal with no penalty",
        "Access up to 80% of your home's appraised value via HELOC",
        "Revolving credit — borrow, repay, and borrow again",
        "Interest charged only on the amount drawn",
        "Rates far lower than credit cards or personal loans"
      ],
      process: [
        "Consultation to review renewal timeline and equity position",
        "Market rate comparison and HELOC eligibility assessment",
        "Lender matching and strategy recommendation",
        "Application submission and approval coordination",
        "Seamless closing — renewal, HELOC, or both"
      ],
      whoCanApply: "Any Canadian homeowner approaching their renewal date or holding a minimum of 20% home equity, if either applies to you, there's likely a financial opportunity worth exploring.",
      contactInfo: {
        phone: "(780) 246 7559",
        email: "deolmortgages10@gmail.com"
      }
    },
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

  return (
    <div className="services-page">
      {/* Hero Section - Full width image with 1500px content constraint */}
      <div className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-image" aria-label="Mortgage services hero background"></div>
        <div className="services-hero-container">
          <div className="services-hero-content">
            <h1 className="fade-up">What we Offer</h1>
            <p className="fade-up">Every mortgage type. Every client situation. One trusted solution.</p>
            <div className="hero-stats fade-up">
              <div className="hero-stat">
                <span className="hero-stat-number">5+</span>
                <span className="hero-stat-label">Years of Mortgage Excellence</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">1,000+</span>
                <span className="hero-stat-label">Happy Clients</span>
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
              <div className="service-icon">{service.logo}</div> {/* Changed from getServiceIcon(service.id) to service.logo */}
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
              <div className="modal-icon">{selectedService.logo}</div> {/* Changed from getServiceIcon(selectedService.id) to selectedService.logo */}
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