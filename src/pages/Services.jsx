import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "First-Time Home Buyers",
      description: "Expert guidance for first-time buyers navigating the mortgage process with confidence and clarity.",
      detailedDescription: "Buying your first home is an exciting milestone, but it can also be overwhelming. Our dedicated first-time home buyer program provides step-by-step guidance through the entire mortgage process, from pre-approval to closing.",
      keyBenefits: [
        "Down payment assistance programs",
        "Educational resources and workshops",
        "Preferred rates for first-time buyers",
        "Step-by-step guidance through process",
        "Credit score improvement strategies",
        "Government grant eligibility assessment"
      ],
      process: [
        "Initial consultation to understand your goals",
        "Pre-approval application and document collection",
        "Home search and offer preparation",
        "Mortgage approval and underwriting",
        "Closing coordination and final walkthrough"
      ],
      whoCanApply: "First-time homebuyers who haven't owned a home in the past 3 years, with stable income and acceptable credit history.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 2,
      title: "Mortgage Refinancing",
      description: "Optimize your mortgage terms and rates to save money and achieve your financial goals.",
      detailedDescription: "Refinancing your mortgage can help you lower your monthly payments, shorten your loan term, or access your home's equity for major expenses. Our experts analyze your current situation to find the best refinancing solution.",
      keyBenefits: [
        "Lower interest rates and monthly payments",
        "Switch from variable to fixed rates",
        "Cash-out refinance for home improvements",
        "Debt consolidation opportunities",
        "Remove mortgage insurance",
        "Shorten loan term to build equity faster"
      ],
      process: [
        "Current mortgage analysis",
        "Rate comparison and savings calculation",
        "Application and documentation",
        "Property appraisal if needed",
        "Closing and fund disbursement"
      ],
      whoCanApply: "Homeowners with existing mortgages who have at least 20% equity and good credit history.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 3,
      title: "Mortgage Transfers",
      description: "Seamlessly transfer your mortgage to take advantage of better rates and terms.",
      detailedDescription: "Moving your mortgage to a new lender can unlock better rates and terms without the hassle of a full refinance. We handle all the paperwork and coordination to ensure a smooth transition.",
      keyBenefits: [
        "Better interest rates and terms",
        "No appraisal often required",
        "Lower monthly payments",
        "Switch to better lender service",
        "Minimal documentation required",
        "Fast processing times"
      ],
      process: [
        "Current mortgage review",
        "Lender comparison and selection",
        "Transfer application submission",
        "Legal document preparation",
        "Fund transfer and registration"
      ],
      whoCanApply: "Homeowners with good payment history looking for better rates or terms from a different lender.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 4,
      title: "Pre-Approval Services",
      description: "Get pre-approved to know your budget and strengthen your position when making an offer.",
      detailedDescription: "A mortgage pre-approval gives you a clear picture of your borrowing power and shows sellers you're a serious buyer. Our streamlined pre-approval process gets you ready to shop with confidence.",
      keyBenefits: [
        "Know your exact budget before shopping",
        "Stronger negotiating position",
        "Faster closing once offer accepted",
        "Rate lock options available",
        "Identify credit issues early",
        "Shop with confidence"
      ],
      process: [
        "Income and asset verification",
        "Credit check and analysis",
        "Affordability calculation",
        "Pre-approval letter issued",
        "Valid for 90-120 days"
      ],
      whoCanApply: "Any home buyer planning to purchase within the next 4 months, with verifiable income and acceptable credit.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 5,
      title: "Debt Consolidation",
      description: "Combine high-interest debts into one manageable mortgage payment.",
      detailedDescription: "Stop juggling multiple high-interest payments. Our debt consolidation mortgage solution combines credit cards, car loans, and other debts into a single, lower monthly payment through your home equity.",
      keyBenefits: [
        "Single monthly payment",
        "Lower overall interest rates",
        "Improved cash flow",
        "Potential tax benefits",
        "Simplified debt management",
        "Credit score improvement"
      ],
      process: [
        "Debt inventory and analysis",
        "Equity assessment",
        "Consolidation strategy development",
        "Application and approval",
        "Debt payoff and closing"
      ],
      whoCanApply: "Homeowners with sufficient equity (typically 20%+) looking to consolidate high-interest debts.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 6,
      title: "Self-Employed & Non-Traditional Mortgages",
      description: "Mortgage solutions designed for self-employed and non-traditional income earners.",
      detailedDescription: "Being self-employed shouldn't prevent you from getting a great mortgage. We specialize in alternative documentation mortgages that use bank statements, invoices, or accountant letters instead of traditional pay stubs.",
      keyBenefits: [
        "Bank statement programs available",
        "Alternative income verification",
        "Lower documentation requirements",
        "Business assets considered",
        "Stated income options",
        "Flexible qualification criteria"
      ],
      process: [
        "Income documentation review",
        "Business financial analysis",
        "Alternative qualification path",
        "Lender matching and application",
        "Approval and funding"
      ],
      whoCanApply: "Self-employed individuals, freelancers, contractors, and business owners with 2+ years of tax returns.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 7,
      title: "Renewals",
      description: "Review and renew your mortgage with competitive rates and better terms.",
      detailedDescription: "Don't automatically renew with your current lender. We help you compare renewal offers from multiple lenders to ensure you get the best rates and terms for your next mortgage term.",
      keyBenefits: [
        "Rate comparison across lenders",
        "Early renewal options available",
        "Term flexibility",
        "Prepayment privilege review",
        "No appraisal typically needed",
        "Minimal documentation"
      ],
      process: [
        "Current term analysis",
        "Rate shopping and comparison",
        "Renewal negotiation",
        "Documentation and approval",
        "Smooth transition to new term"
      ],
      whoCanApply: "Homeowners whose mortgage term is ending within the next 6 months.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 8,
      title: "Investment Property Financing",
      description: "Strategic financing solutions for real estate investors.",
      detailedDescription: "Expand your real estate portfolio with our specialized investment property mortgages. We understand the unique needs of investors and offer financing options designed to maximize your returns.",
      keyBenefits: [
        "Rental income considered",
        "Portfolio lending options",
        "Lower down payment options",
        "Interest-only available",
        "Multiple property financing",
        "Refinance for better cash flow"
      ],
      process: [
        "Investment strategy review",
        "Property cash flow analysis",
        "Portfolio assessment",
        "Lender matching and application",
        "Closing and property acquisition"
      ],
      whoCanApply: "Real estate investors with 1+ properties or first-time investors with strong qualifications.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 9,
      title: "Home Equity Line of Credit (HELOC)",
      description: "Flexible access to your home equity without refinancing.",
      detailedDescription: "A HELOC gives you a revolving line of credit based on your home equity, perfect for ongoing projects or unexpected expenses. You only pay interest on what you use, when you use it.",
      keyBenefits: [
        "Revolving credit access",
        "Interest-only payment options",
        "Use funds as needed",
        "No closing costs available",
        "Lower rates than credit cards",
        "Tax-efficient borrowing"
      ],
      process: [
        "Equity assessment",
        "Credit limit determination",
        "Application and approval",
        "Line of credit setup",
        "Access to funds within days"
      ],
      whoCanApply: "Homeowners with 20%+ equity and good credit seeking flexible borrowing options.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    },
    {
      id: 10,
      title: "Private Mortgages",
      description: "Alternative lending when traditional banks say no.",
      detailedDescription: "Private mortgages provide fast, flexible solutions based on property equity rather than traditional credit requirements. These short-term options can help bridge financial gaps or complex situations.",
      keyBenefits: [
        "Equity-based approval",
        "Flexible credit requirements",
        "Fast funding timelines",
        "Alternative income verification",
        "Non-standard properties accepted",
        "Bridge financing available",
        "Minimal prepayment penalties",
        "Solution-focused underwriting"
      ],
      process: [
        "Situation Review - We assess your needs and timeline",
        "Property Evaluation - Equity and value are reviewed",
        "Lender Presentation - Your scenario is presented to private lenders",
        "Fast Approval - Approval based primarily on equity",
        "Rapid Closing - Funds are released quickly"
      ],
      whoCanApply: "Typically 35%+ property equity, clear property title, acceptable property location, defined exit strategy, ability to service interest payments.",
      contactInfo: {
        phone: "(403) 400-3064",
        email: "clientcare.cortez@gmail.com"
      }
    }
  ];

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
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Comprehensive mortgage solutions tailored to your unique needs
        </p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button 
              className="service-button"
              onClick={() => setSelectedService(service)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Detailed Service View */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedService.title}</h2>
              <p className="modal-subtitle">About This Service</p>
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
                  Book a free consultation to discuss your mortgage needs and explore the best options for you.
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
                  Note: Every situation is unique. The information provided here is general in nature. 
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