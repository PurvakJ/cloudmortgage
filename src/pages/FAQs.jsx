import React, { useState } from 'react';
import './FAQs.css';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      category: "qualification",
      question: "What credit score do I need to qualify for a mortgage?",
      answer: "While requirements vary by loan type, most conventional loans require a minimum credit score of 620. FHA loans may accept scores as low as 580, and VA loans often have more flexible requirements. Higher scores typically qualify for better interest rates.",
      detailedAnswer: "Credit score requirements by loan type:\n• Conventional: 620+ (best rates for 740+)\n• FHA: 580+ (500-579 with 10% down)\n• VA: 620+ (some lenders accept 580)\n• USDA: 640+\n\nImproving your credit score before applying can save you thousands in interest over the life of your loan."
    },
    {
      id: 2,
      category: "payments",
      question: "How much down payment do I need?",
      answer: "Down payment requirements vary: Conventional loans may require as little as 3-5%, FHA loans require 3.5%, and VA/USDA loans may offer 0% down options. However, putting 20% down helps you avoid Private Mortgage Insurance (PMI).",
      detailedAnswer: "Minimum down payment by loan type:\n• Conventional: 3-5% (as low as 3% for first-time buyers)\n• FHA: 3.5% (580+ credit score)\n• VA: 0% (for eligible veterans)\n• USDA: 0% (rural properties)\n• Jumbo: 10-20% (varies by lender)\n\nPutting 20% down eliminates PMI and may get you better rates."
    },
    {
      id: 3,
      category: "process",
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is an initial estimate based on self-reported information. Pre-approval is more thorough, involving verification of your income, assets, and credit. A pre-approval letter shows sellers you're a serious buyer.",
      detailedAnswer: "Pre-qualification:\n• Based on self-reported info\n• No credit check required\n• Quick estimate (minutes)\n• Not binding\n\nPre-approval:\n• Verified income/assets\n• Hard credit check\n• Takes 1-3 days\n• Valid for 90 days\n• Stronger negotiating position"
    },
    {
      id: 4,
      category: "process",
      question: "How long does the mortgage process take?",
      answer: "Typically, the mortgage process takes 30-45 days from application to closing. This includes underwriting, appraisal, and final approval. However, timelines can vary based on your situation and the complexity of the loan.",
      detailedAnswer: "Typical timeline breakdown:\n• Application & docs: 1-3 days\n• Processing: 3-7 days\n• Underwriting: 5-10 days\n• Conditional approval: 1-3 days\n• Appraisal: 7-10 days\n• Final approval: 2-5 days\n• Closing: 1-3 days\n\nTotal: 30-45 days on average. Faster closings (14-21 days) possible with streamlined processes."
    },
    {
      id: 5,
      category: "costs",
      question: "What are closing costs?",
      answer: "Closing costs are fees associated with finalizing your mortgage, typically 2-5% of the loan amount. They include appraisal fees, title insurance, attorney fees, and prepaid items like property taxes and homeowners insurance.",
      detailedAnswer: "Common closing costs include:\n• Appraisal fee: $300-500\n• Title search/insurance: $1,000-2,000\n• Origination fee: 0.5-1% of loan\n• Attorney fees: $500-1,500\n• Recording fees: $100-200\n• Prepaid interest: varies\n• Property taxes (escrow): 2-6 months\n• Homeowners insurance: 1 year upfront\n\nTip: Shop around for title and attorney services to save money."
    },
    {
      id: 6,
      category: "payments",
      question: "Can I pay off my mortgage early?",
      answer: "Yes, most mortgages allow early payoff without penalties. However, some loans may have prepayment penalties. Always check your loan terms or ask your lender about any potential fees for early repayment.",
      detailedAnswer: "Prepayment penalty types:\n• Soft penalty: Can sell home without penalty, but can't refinance\n• Hard penalty: Penalty applies for any early payoff\n• Duration: Usually 1-5 years from closing\n• Cost: Typically 2-4% of outstanding balance\n\nMost conventional and government loans have no prepayment penalties. Always ask your lender before signing."
    },
    {
      id: 7,
      category: "process",
      question: "What is an escrow account?",
      answer: "An escrow account is where your lender holds funds for property taxes and homeowners insurance. You pay a portion with your monthly mortgage payment, and the lender pays these bills when they're due.",
      detailedAnswer: "How escrow works:\n• Monthly: You pay 1/12 of annual taxes + insurance\n• Lender holds funds in escrow account\n• When bills due: Lender pays from escrow\n• Annual review: Adjusts for changes in taxes/insurance\n\nBenefits: No surprise bills, lenders ensure taxes/insurance are paid. Some loans require escrow, others offer escrow waiver for 20%+ down."
    },
    {
      id: 8,
      category: "rates",
      question: "How do interest rates affect my monthly payment?",
      answer: "Interest rates directly impact your monthly payment. A 1% difference in rate on a $300,000 loan can change your monthly payment by approximately $150-200. Lower rates mean lower monthly payments and less interest paid over time.",
      detailedAnswer: "Rate impact example ($300,000 loan, 30 years):\n• 3% rate: $1,265/month, $155,000 total interest\n• 4% rate: $1,432/month, $215,000 total interest\n• 5% rate: $1,610/month, $279,000 total interest\n• 6% rate: $1,799/month, $347,000 total interest\n\nA 1% rate difference saves ~$167/month or $60,000+ over loan life. Even 0.25% can save thousands."
    },
    {
      id: 9,
      category: "qualification",
      question: "What documents do I need for a mortgage application?",
      answer: "You'll typically need proof of income (pay stubs, W-2s, tax returns), asset statements (bank accounts, investments), identification, and documentation of any debts or other financial obligations.",
      detailedAnswer: "Required documents checklist:\n• Income: 2 years tax returns, 2 months pay stubs, W-2s\n• Assets: 2 months bank/investment statements\n• Employment: Verification letter, contact info\n• ID: Driver's license, passport, SSN\n• Debts: Credit card, loan statements\n• Gifts: Gift letter, donor's bank statement\n• Rental: Lease agreements (if applicable)\n\nSelf-employed: 2 years business tax returns, profit/loss statements."
    },
    {
      id: 10,
      category: "rates",
      question: "Should I lock my interest rate?",
      answer: "Rate locking secures your interest rate for a specific period (typically 30-60 days). It's recommended when rates are favorable or you're close to closing. Some lenders offer free locks, others charge a fee.",
      detailedAnswer: "Rate lock considerations:\n• Lock when: Rates are low, closing within 30-60 days\n• Float when: Rates dropping, closing far away\n• Lock periods: 15, 30, 45, 60, 90 days\n• Longer locks: Higher fees or higher rates\n• One-time float down: Option to lower if rates improve\n\nAsk about free locks, extended lock options, and float-down policies."
    },
    {
      id: 11,
      category: "costs",
      question: "What is Private Mortgage Insurance (PMI)?",
      answer: "PMI protects the lender if you default on your loan. It's typically required for conventional loans with less than 20% down payment. PMI can be removed once you reach 20% equity.",
      detailedAnswer: "PMI facts:\n• Cost: 0.5-1.5% of loan annually\n• Monthly payment: $50-150 per $100,000 borrowed\n• Removal: Request at 20% equity, automatic at 22%\n• Cancellation: No PMI once loan-to-value reaches 78%\n\nWays to avoid PMI:\n• 20% down payment\n• Lender-paid PMI (higher rate)\n• Piggyback loan (80-10-10)\n• VA or USDA loans (no PMI)"
    },
    {
      id: 12,
      category: "process",
      question: "What is mortgage underwriting?",
      answer: "Underwriting is the process where a lender verifies your financial information and assesses the risk of lending to you. The underwriter reviews your credit, income, assets, and the property to make a final approval decision.",
      detailedAnswer: "Underwriting evaluates the 4 C's:\n• Capacity: Can you repay? (income vs debts)\n• Credit: Will you repay? (credit score, history)\n• Capital: Assets available (savings, investments)\n• Collateral: Property value (appraisal)\n\nUnderwriter may request:\n• Letters of explanation\n• Additional documentation\n• Verification of deposits\n\nConditional approval = submit more docs. Final approval = clear to close."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'qualification', name: 'Qualification', icon: '✅' },
    { id: 'payments', name: 'Payments & Down Payment', icon: '💰' },
    { id: 'process', name: 'Process & Timeline', icon: '⏱️' },
    { id: 'costs', name: 'Costs & Fees', icon: '💵' },
    { id: 'rates', name: 'Interest Rates', icon: '📈' }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="faqs-page">
      <div className="faqs-header">
        <h1 className="faqs-title">Frequently Asked Questions</h1>
        <p className="faqs-subtitle">
          Find answers to common questions about mortgages and home buying
        </p>
      </div>

      <div className="faqs-search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search your question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm('')}>×</button>
          )}
        </div>
      </div>

      <div className="faqs-categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="faqs-container">
        {filteredFaqs.length === 0 ? (
          <div className="no-results">
            <p>No questions found matching "{searchTerm}"</p>
            <button className="reset-search" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
              Clear Search
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
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

      <div className="faqs-cta">
        <div className="cta-content">
          <h3>Still have questions?</h3>
          <p>Our mortgage experts are here to help you every step of the way.</p>
          <div className="cta-buttons">
            <button className="btn-contact">Contact Our Team</button>
            <button className="btn-schedule">Schedule Consultation</button>
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
  );
}

export default FAQs;