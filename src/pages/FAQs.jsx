import React, { useState, useEffect, useRef } from 'react';
import './FAQs.css';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const observerRef = useRef(null);

  const faqs = [
    {
      id: 1,
      category: "qualification",
      question: "What credit score do I need to qualify for a mortgage in Canada?",
      answer: "In Canada, most lenders require a minimum credit score of 600-620 for insured mortgages. A score of 680+ typically qualifies you for the best interest rates from major Canadian lenders.",
      detailedAnswer: "Canadian credit score requirements by lender type:\n• Major Banks: 620+ (best rates for 680+)\n• Credit Unions: 600+ (more flexible)\n• B-Lenders: 550+ (alternative options)\n• Private Lenders: No minimum (equity-based)\n\nCMHC Insurance Requirements:\n• Minimum 600 credit score for standard approval\n• 580-599 may qualify with larger down payment\n\nImproving your Canadian credit score before applying can save you thousands in interest over the life of your mortgage."
    },
    {
      id: 2,
      category: "payments",
      question: "What is the minimum down payment for a home in Canada?",
      answer: "Canadian down payment requirements: 5% for homes under $500,000, 10% on the portion between $500,000 and $1,000,000, and 20% for homes over $1,000,000.",
      detailedAnswer: "Canadian down payment rules:\n• First $500,000: Minimum 5% down\n• $500,000 - $1,000,000: Minimum 10% on portion over $500k\n• Over $1,000,000: Minimum 20% down required\n\nExample calculations:\n• $400,000 home: $20,000 down (5%)\n• $700,000 home: $45,000 down (5% on $500k = $25k + 10% on $200k = $20k)\n• $1,200,000 home: $240,000 down (20%)\n\nCMHC insurance required for down payments under 20%."
    },
    {
      id: 3,
      category: "process",
      question: "What is CMHC mortgage insurance and do I need it?",
      answer: "CMHC insurance is required in Canada for all mortgages with down payments less than 20%. It protects lenders against default and allows you to purchase with as little as 5% down.",
      detailedAnswer: "CMHC insurance facts:\n• Required when: Down payment is under 20%\n• Premium cost: 0.6% to 4.0% of loan amount\n• Added to: Your mortgage principal\n• Who pays: The borrower (homeowner)\n\nCMHC premium rates (as % of loan):\n• 5% down: 4.00% premium\n• 10% down: 3.10% premium\n• 15% down: 2.80% premium\n• 20% down: 0% (no insurance needed)\n\nSagen (formerly Genworth) and Canada Guaranty also offer mortgage default insurance."
    },
    {
      id: 4,
      category: "process",
      question: "How long does the Canadian mortgage process take?",
      answer: "Typically, the Canadian mortgage process takes 30-45 days from application to closing. Pre-approval can be obtained in as little as 24 hours. Timelines vary based on your situation and lender.",
      detailedAnswer: "Typical Canadian mortgage timeline:\n• Pre-approval: 24-48 hours\n• Application & docs: 2-5 days\n• Processing: 3-7 days\n• Underwriting: 5-10 days\n• CMHC insurance approval: 2-5 days (if needed)\n• Appraisal: 7-10 days\n• Final approval: 2-5 days\n• Legal closing: 5-10 days\n\nTotal: 30-45 days on average. Rush closings (14-21 days) possible with streamlined processes."
    },
    {
      id: 5,
      category: "costs",
      question: "What closing costs can I expect in Canada?",
      answer: "Canadian closing costs typically range from 1.5% to 4% of the home's purchase price. These include legal fees, land transfer taxes, title insurance, and appraisal fees.",
      detailedAnswer: "Common Canadian closing costs:\n• Legal fees: $1,000 - $2,500\n• Land transfer tax: 0.5% - 2.5% of price\n• Title insurance: $200 - $500\n• Appraisal fee: $300 - $500\n• Home inspection: $400 - $600\n• Property tax adjustment: 3-6 months\n• CMHC insurance premium (if <20% down)\n• Interest adjustment: varies\n\nFirst-time home buyers may qualify for land transfer tax rebates in some provinces (Ontario, BC, etc.)."
    },
    {
      id: 6,
      category: "payments",
      question: "Can I pay off my Canadian mortgage early?",
      answer: "Yes, most Canadian mortgages allow prepayment privileges. Typical prepayment options include increasing payments by 10-20% annually and making lump sum payments of 10-20% of the original principal per year.",
      detailedAnswer: "Canadian mortgage prepayment features:\n• Prepayment privileges: 10-20% lump sum/year\n• Payment increase: 10-20% annually\n• Double-up payments: Many lenders allow\n• Prepayment penalties: Usually 3 months interest or interest rate differential (IRD)\n\nPenalty types:\n• Variable rate mortgages: 3 months interest\n• Fixed rate mortgages: Greater of 3 months interest or IRD\n\nTip: Use your prepayment privileges before breaking your mortgage to minimize penalties."
    },
    {
      id: 7,
      category: "process",
      question: "What is the mortgage stress test in Canada?",
      answer: "The Canadian mortgage stress test requires borrowers to qualify at a higher interest rate (typically 5.25% or contract rate +2%, whichever is higher) to ensure you can afford payments if rates rise.",
      detailedAnswer: "Stress test requirements:\n• Qualifying rate: Greater of 5.25% or contract rate +2%\n• Applies to: All insured mortgages and uninsured conventional mortgages\n• Purpose: Ensure affordability if rates increase\n\nExample:\n• Contract rate: 4.5%\n• Stress test rate: 5.25% (since 5.25% > 6.5%? Actually 4.5%+2%=6.5%, so use 6.5%)\n• Qualification based on 6.5%, not 4.5%\n\nAlternate lenders (credit unions) may have different stress test rules."
    },
    {
      id: 8,
      category: "rates",
      question: "What's the difference between fixed and variable mortgage rates?",
      answer: "Fixed rates stay the same throughout your term, offering payment stability. Variable rates fluctuate with the Bank of Canada's prime rate, potentially offering lower initial rates but with payment uncertainty.",
      detailedAnswer: "Fixed rate mortgages:\n• Rate locked for full term (1-10 years)\n• Predictable monthly payments\n• Higher prepayment penalties to break\n• Good for rate stability\n\nVariable rate mortgages:\n• Rate changes with prime rate\n• Lower initial rates typically\n• Lower prepayment penalties (3 months interest)\n• Good if rates are expected to drop or stay stable\n\nAdjustable rate mortgages: Payments change when rates change. Variable rate: Payments stay same, amortization changes."
    },
    {
      id: 9,
      category: "qualification",
      question: "What documents do I need for a Canadian mortgage application?",
      answer: "Canadian lenders typically require proof of income (pay stubs, T4s, tax returns), asset statements, government ID, proof of down payment source, and information about existing debts.",
      detailedAnswer: "Required documents for Canadian mortgages:\n• Income: 2 years T1 Generals, Notice of Assessments, T4s\n• Employment: Recent pay stubs, employment letter\n• Assets: 90 days bank/investment statements\n• Down payment: 90 days history, gift letter if applicable\n• Identification: Driver's license, passport, PR card\n• Debts: Credit card statements, loan documents\n• Rental: Lease agreements (if applicable)\n\nSelf-employed: 2 years business financial statements, corporate tax returns, personal tax returns with schedules."
    },
    {
      id: 10,
      category: "rates",
      question: "Should I lock in my mortgage rate?",
      answer: "Rate locks in Canada typically hold your rate for 90-120 days. Locking is recommended when rates are favorable or you're close to closing. Many Canadian lenders offer free rate locks.",
      detailedAnswer: "Canadian rate lock considerations:\n• Lock when: Rates are low, closing within 90-120 days\n• Float when: Rates dropping, closing far away\n• Lock periods: 90, 120 days common\n• Rate commitment: Guarantees rate for term\n• Rate protection: Some lenders offer lower rate guarantees\n\nNew build construction: Extended locks (12-24 months) available\n\nTip: Compare rate lock policies - some lenders offer 'rate drop' protection if rates fall before closing."
    },
    {
      id: 11,
      category: "costs",
      question: "What is CMHC insurance premium and how is it paid?",
      answer: "CMHC insurance premium is required for Canadian mortgages with less than 20% down. The premium is typically added to your mortgage principal, ranging from 0.6% to 4.0% of the loan amount based on your down payment.",
      detailedAnswer: "CMHC premium rates (as % of loan):\n• 5% down (95% LTV): 4.00% premium\n• 10% down (90% LTV): 3.10% premium\n• 15% down (85% LTV): 2.80% premium\n• 20% down (80% LTV): 0% premium\n\nPayment options:\n• Added to mortgage principal (most common)\n• Paid upfront in cash (rare)\n\nExample on $400,000 home with 5% down:\n• Mortgage: $380,000\n• CMHC premium (4%): $15,200\n• Total mortgage: $395,200\n\nProvincial sales tax (PST/QST) applies to CMHC premium in some provinces."
    },
    {
      id: 12,
      category: "process",
      question: "What is a mortgage pre-approval in Canada?",
      answer: "A Canadian mortgage pre-approval is a lender's conditional commitment to lend you a specific amount. It involves verifying your income, credit, and down payment, and is typically valid for 90-120 days.",
      detailedAnswer: "Pre-approval benefits:\n• Know your maximum purchase price\n• Lock in an interest rate (typically 90-120 days)\n• Show sellers you're a serious buyer\n• Identify any credit issues early\n\nWhat's included:\n• Maximum loan amount\n• Interest rate guarantee\n• Estimated monthly payments\n\nWhat's NOT guaranteed:\n• Final approval until property is reviewed\n• Rate lock may have conditions\n\nPre-qualification (less formal) vs Pre-approval (verified). Always get pre-approved before house hunting."
    },
    {
      id: 13,
      category: "process",
      question: "What is the maximum amortization period in Canada?",
      answer: "For insured mortgages (less than 20% down), the maximum amortization is 25 years. For uninsured mortgages (20%+ down), you may qualify for up to 30-year amortization.",
      detailedAnswer: "Amortization limits:\n• Insured mortgages (<20% down): 25 years maximum\n• Uninsured conventional (20%+ down): 30 years maximum\n• Refinances (insured): 25 years maximum\n• Refinances (uninsured): 30 years maximum\n\nShorter amortization benefits:\n• Less total interest paid\n• Build equity faster\n• Qualify for better rates\n\nExample comparison on $400,000 at 5%:\n• 25 years: $2,338/month, $301,400 interest\n• 30 years: $2,147/month, $373,000 interest\n• 30-year saves $191/month but costs $71,600 more interest"
    },
    {
      id: 14,
      category: "payments",
      question: "How do Canadian mortgage payments work?",
      answer: "Canadian mortgage payments typically include principal and interest, and may also include property taxes and CMHC insurance if applicable. Payments can be made monthly, bi-weekly, weekly, or accelerated.",
      detailedAnswer: "Payment frequency options:\n• Monthly: 12 payments/year\n• Semi-monthly: 24 payments/year\n• Bi-weekly: 26 payments/year\n• Weekly: 52 payments/year\n• Accelerated bi-weekly: 26 payments (higher amount)\n\nPayment components:\n• Principal: Reduces loan balance\n• Interest: Cost of borrowing\n• Property taxes: If included in payment\n• CMHC premium: If added to mortgage\n\nAccelerated payments save interest:\n• Pay mortgage off faster\n• Build equity quicker\n• Example: Bi-weekly vs accelerated bi-weekly can save years and thousands in interest"
    },
    {
      id: 15,
      category: "qualification",
      question: "Can self-employed Canadians qualify for a mortgage?",
      answer: "Yes! Self-employed Canadians can qualify using alternative documentation like bank statements, Notice of Assessments, or through Alternative A (Alt-A) mortgage programs designed specifically for business owners.",
      detailedAnswer: "Self-employed mortgage options:\n• Traditional: 2 years tax returns (full income reported)\n• Bank Statement Program: 12-24 months business deposits\n• Alt-A (Alternative A): Alternative income verification\n• Stated Income: Limited availability, higher rates\n\nRequirements typically include:\n• 2+ years in business\n• Down payment: 10-20% minimum\n• Business license or proof of self-employment\n\nTip: Work with a mortgage broker familiar with self-employed programs to find the best fit."
    },
    {
      id: 16,
      category: "property",
      question: "Can I add a secondary suite to my home with mortgage refinancing?",
      answer: "Yes! Canadian homeowners can refinance to add a secondary suite to their property. This can create rental income and increase property value, with CMHC-insured refinancing options available.",
      detailedAnswer: "Secondary suite refinancing benefits:\n• Access equity for construction costs\n• Create rental income stream\n• Increase property value\n• CMHC insured refinancing available\n\nRequirements:\n• Sufficient equity in property\n• Municipal approval for suite\n• Licensed contractor for construction\n\nRental income can help qualify for larger mortgage amounts (50-80% of market rent typically considered)."
    },
    {
      id: 17,
      category: "property",
      question: "What is the minimum down payment for an investment property in Canada?",
      answer: "Investment properties in Canada typically require a minimum 20% down payment. Some programs may allow 5-10% down for owner-occupied multi-unit properties (duplex, triplex, fourplex).",
      detailedAnswer: "Investment property down payments:\n• 1-4 unit rental: Minimum 20% down\n• Owner-occupied duplex/triplex: 5-10% down possible\n• Commercial property: 25-35% down\n\nQualification factors:\n• Rental income considered (50-80% of market rent)\n• Must qualify at stress test rate\n• Higher rates typically for investments\n\nTip: Live in one unit of a multi-unit property to qualify for lower down payment (owner-occupied rules)."
    },
    {
      id: 18,
      category: "process",
      question: "What is porting a mortgage in Canada?",
      answer: "Porting allows you to transfer your existing mortgage to a new property when you move, avoiding prepayment penalties and keeping your current interest rate and terms.",
      detailedAnswer: "Porting benefits:\n• Avoid prepayment penalties\n• Keep current interest rate (if lower than market)\n• Maintain remaining term\n• Save thousands in fees\n\nPorting requirements:\n• Same borrower(s)\n• New property must qualify\n• May need additional financing for higher-priced home\n• Timing constraints (typically 30-90 days)\n\nCMHC/Sagen insured mortgages can also be ported, saving insurance costs on the new mortgage."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'qualification', name: 'Qualification', icon: '✅' },
    { id: 'payments', name: 'Payments & Down Payment', icon: '💰' },
    { id: 'process', name: 'Process & Timeline', icon: '⏱️' },
    { id: 'costs', name: 'Costs & Fees', icon: '💵' },
    { id: 'rates', name: 'Mortgage Rates', icon: '📈' },
    { id: 'property', name: 'Property & Investment', icon: '🏠' }
  ];

  // Optimized Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      threshold: 0.1,
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

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleScheduleClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="faqs-page">
      {/* Hero Section - Full width image with 1500px content constraint */}
      <div className="faqs-hero">
        <div className="faqs-hero-overlay"></div>
        <div className="faqs-hero-image" aria-label="FAQs hero background"></div>
        <div className="faqs-hero-container">
          <div className="faqs-hero-content">
            <h1 className="fade-up">Frequently Asked Questions</h1>
            <p className="fade-up">Find answers to common questions about Canadian mortgages and home buying with Oakmont Capital</p>
            <div className="hero-stats fade-up">
              <div className="hero-stat">
                <span className="hero-stat-number">100+</span>
                <span className="hero-stat-label">Canadian Questions Answered</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">98%</span>
                <span className="hero-stat-label">Customer Satisfaction</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">24/7</span>
                <span className="hero-stat-label">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Categories - Contained at 1500px */}
      <div className="faqs-container-wrapper">
        <div className="faqs-search-section fade-up">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search your Canadian mortgage question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')} aria-label="Clear search">×</button>
            )}
          </div>
        </div>

        <div className="faqs-categories fade-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              aria-label={`Filter by ${category.name}`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="faqs-list">
          {filteredFaqs.length === 0 ? (
            <div className="no-results fade-up">
              <p>No questions found matching "{searchTerm}"</p>
              <button className="reset-search" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="faq-item fade-up" style={{ animationDelay: `${Math.min(index * 0.02, 0.4)}s` }}>
                <div
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question-content">
                    <span className="faq-icon">{openIndex === index ? '▼' : '▶'}</span>
                    <h3>{faq.question}</h3>
                  </div>
                  <span className="faq-category-badge">{categories.find(c => c.id === faq.category)?.name}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    <div className="faq-detailed-answer">
                      <h4>More Details:</h4>
                      {faq.detailedAnswer.split('\n').map((line, i) => (
                        line.trim() && <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="faqs-cta fade-up">
          <div className="cta-content">
            <h3>Still have Canadian mortgage questions?</h3>
            <p>Oakmont Capital's mortgage experts are here to help you every step of the way.</p>
            <div className="cta-buttons">
              <button className="btn-contact" onClick={handleContactClick}>Contact Our Team</button>
              <button className="btn-schedule" onClick={handleScheduleClick}>Schedule Consultation</button>
            </div>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
              <div className="stat">
                <span className="stat-number">&lt; 24h</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;