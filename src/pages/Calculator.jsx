import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
  const [activeTab, setActiveTab] = useState('payment');
  
  // Payment Calculator State
  const [paymentLoanAmount, setPaymentLoanAmount] = useState(400000);
  const [paymentDownPayment, setPaymentDownPayment] = useState(50000);
  const [paymentInterestRate, setPaymentInterestRate] = useState(5);
  const [paymentLoanTerm, setPaymentLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [ ,setAmortizationData] = useState([]);

  // Affordability Calculator State
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [affordabilityDownPayment, setAffordabilityDownPayment] = useState(50000);
  const [affordabilityInterestRate, setAffordabilityInterestRate] = useState(5.5);
  const [amortizationYears, setAmortizationYears] = useState(25);
  const [propertyTax, setPropertyTax] = useState(3000);
  const [heatingCost, setHeatingCost] = useState(150);
  const [condoFees, setCondoFees] = useState(0);
  const [maxHomePrice, setMaxHomePrice] = useState(0);
  const [comfortableHomePrice, setComfortableHomePrice] = useState(0);
  const [affordablePayment, setAffordablePayment] = useState(0);
  const [gdsRatio, setGdsRatio] = useState(0);
  const [tdsRatio, setTdsRatio] = useState(0);

  // Frequency Calculator State
  const [freqMortgageAmount, setFreqMortgageAmount] = useState(400000);
  const [freqInterestRate, setFreqInterestRate] = useState(5.5);
  const [freqAmortizationYears, setFreqAmortizationYears] = useState(25);
  const [frequencyData, setFrequencyData] = useState({
    monthly: { payment: 0, totalInterest: 0, years: 0, payments: 0 },
    biWeekly: { payment: 0, totalInterest: 0, years: 0, payments: 0 },
    accBiWeekly: { payment: 0, totalInterest: 0, years: 0, payments: 0 },
    weekly: { payment: 0, totalInterest: 0, years: 0, payments: 0 },
    accWeekly: { payment: 0, totalInterest: 0, years: 0, payments: 0 }
  });

  // Compare Calculator State
  const [scenarios, setScenarios] = useState([
    { id: 1, amount: 400000, rate: 5.5, years: 25 },
    { id: 2, amount: 400000, rate: 5.5, years: 25 }
  ]);
  const [nextId, setNextId] = useState(3);

  // Rent vs Buy State
  const [rentMonthly, setRentMonthly] = useState(2200);
  const [rentIncrease, setRentIncrease] = useState(3);
  const [buyHomePrice, setBuyHomePrice] = useState(600000);
  const [buyDownPayment, setBuyDownPayment] = useState(120000);
  const [buyInterestRate, setBuyInterestRate] = useState(5);
  const [buyPropertyTax, setBuyPropertyTax] = useState(3000);
  const [buyMaintenance, setBuyMaintenance] = useState(2000);
  const [homeAppreciation, setHomeAppreciation] = useState(3);
  const [timePeriod, setTimePeriod] = useState(5);
  const [rentTotalCost, setRentTotalCost] = useState(0);
  const [buyTotalCost, setBuyTotalCost] = useState(0);
  const [equityBuilt, setEquityBuilt] = useState(0);
  const [finalHomeValue, setFinalHomeValue] = useState(0);
  const [netPosition, setNetPosition] = useState(0);

  // Calculate Payment Calculator
  useEffect(() => {
    const principal = paymentLoanAmount - paymentDownPayment;
    const monthlyRate = paymentInterestRate / 100 / 12;
    const numberOfPayments = paymentLoanTerm * 12;
    
    let payment = 0;
    if (monthlyRate === 0) {
      payment = principal / numberOfPayments;
    } else {
      payment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    
    const total = payment * numberOfPayments;
    const interest = total - principal;
    
    setMonthlyPayment(payment);
    setTotalInterest(interest);
    setTotalPayment(total);
    setPrincipalAmount(principal);
    
    // Calculate amortization schedule (yearly)
    let balance = principal;
    const yearlyData = [];
    for (let year = 1; year <= paymentLoanTerm; year++) {
      let yearlyPrincipal = 0;
      // yearlyInterest is needed for calculation but not used in the final output
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      yearlyData.push({
        year,
        principalPaid: yearlyPrincipal,
        remainingBalance: Math.max(0, balance)
      });
    }
    setAmortizationData(yearlyData);
  }, [paymentLoanAmount, paymentDownPayment, paymentInterestRate, paymentLoanTerm]);

  // Calculate Affordability
  useEffect(() => {
    const monthlyIncome = annualIncome / 12;
    const monthlyPropertyTax = propertyTax / 12;
    const monthlyHeating = heatingCost;
    const monthlyCondoFees50 = condoFees * 0.5;
    
    // Calculate max affordable payment (32% of gross income for GDS)
    const maxGDSPayment = monthlyIncome * 0.32;
    const housingCostsWithoutMortgage = monthlyPropertyTax + monthlyHeating + monthlyCondoFees50;
    const maxMortgagePayment = maxGDSPayment - housingCostsWithoutMortgage;
    
    // Calculate mortgage amount based on payment
    const monthlyRate = affordabilityInterestRate / 100 / 12;
    const numberOfPayments = amortizationYears * 12;
    let maxMortgageAmount = 0;
    
    if (monthlyRate === 0) {
      maxMortgageAmount = maxMortgagePayment * numberOfPayments;
    } else {
      maxMortgageAmount = maxMortgagePayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
    }
    
    const maxPrice = maxMortgageAmount + affordabilityDownPayment;
    setMaxHomePrice(maxPrice);
    setAffordablePayment(maxMortgagePayment);
    
    // Calculate comfortable price (28% GDS)
    const comfortableGDSPayment = monthlyIncome * 0.28;
    const comfortableMortgagePayment = comfortableGDSPayment - housingCostsWithoutMortgage;
    let comfortableMortgageAmount = 0;
    
    if (monthlyRate === 0) {
      comfortableMortgageAmount = comfortableMortgagePayment * numberOfPayments;
    } else {
      comfortableMortgageAmount = comfortableMortgagePayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
    }
    
    const comfortablePrice = comfortableMortgageAmount + affordabilityDownPayment;
    setComfortableHomePrice(comfortablePrice);
    
    // Calculate actual GDS and TDS for the max scenario
    const actualMortgagePayment = maxMortgagePayment;
    const actualGDS = ((actualMortgagePayment + monthlyPropertyTax + monthlyHeating + monthlyCondoFees50) / monthlyIncome) * 100;
    const actualTDS = ((actualMortgagePayment + monthlyPropertyTax + monthlyHeating + monthlyCondoFees50 + monthlyDebts) / monthlyIncome) * 100;
    
    setGdsRatio(actualGDS);
    setTdsRatio(actualTDS);
  }, [annualIncome, monthlyDebts, affordabilityDownPayment, affordabilityInterestRate, amortizationYears, propertyTax, heatingCost, condoFees]);

  // Calculate Frequency Calculator
  useEffect(() => {
    const calculatePayment = (amount, rate, years, paymentsPerYear, isAccelerated = false) => {
      const periodicRate = rate / 100 / paymentsPerYear;
      let totalPayments = years * paymentsPerYear;
      
      if (isAccelerated && paymentsPerYear === 26) {
        totalPayments = years * 26;
      } else if (isAccelerated && paymentsPerYear === 52) {
        totalPayments = years * 52;
      }
      
      let payment = 0;
      if (periodicRate === 0) {
        payment = amount / totalPayments;
      } else {
        payment = amount * periodicRate * Math.pow(1 + periodicRate, totalPayments) / (Math.pow(1 + periodicRate, totalPayments) - 1);
      }
      
      const totalPaid = payment * totalPayments;
      const totalInterestPaid = totalPaid - amount;
      const yearsToPayoff = totalPayments / paymentsPerYear;
      
      return { payment, totalInterest: totalInterestPaid, years: yearsToPayoff, payments: totalPayments };
    };
    
    const monthly = calculatePayment(freqMortgageAmount, freqInterestRate, freqAmortizationYears, 12);
    const biWeekly = calculatePayment(freqMortgageAmount, freqInterestRate, freqAmortizationYears, 26);
    const accBiWeekly = calculatePayment(freqMortgageAmount, freqInterestRate, freqAmortizationYears, 26, true);
    const weekly = calculatePayment(freqMortgageAmount, freqInterestRate, freqAmortizationYears, 52);
    const accWeekly = calculatePayment(freqMortgageAmount, freqInterestRate, freqAmortizationYears, 52, true);
    
    setFrequencyData({
      monthly,
      biWeekly,
      accBiWeekly,
      weekly,
      accWeekly
    });
  }, [freqMortgageAmount, freqInterestRate, freqAmortizationYears]);

  // Calculate Rent vs Buy
  useEffect(() => {
    // Rent calculation
    let rentCost = 0;
    let currentRent = rentMonthly;
    for (let year = 1; year <= timePeriod; year++) {
      rentCost += currentRent * 12;
      currentRent *= (1 + rentIncrease / 100);
    }
    setRentTotalCost(rentCost);
    
    // Buy calculation
    const loanAmount = buyHomePrice - buyDownPayment;
    const monthlyRate = buyInterestRate / 100 / 12;
    const numberOfPayments = 25 * 12; // Standard 25-year mortgage
    let mortgagePayment = 0;
    
    if (monthlyRate === 0) {
      mortgagePayment = loanAmount / numberOfPayments;
    } else {
      mortgagePayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    
    // Calculate equity after timePeriod years
    let remainingBalance = loanAmount;
    for (let month = 1; month <= timePeriod * 12; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = mortgagePayment - interestPayment;
      remainingBalance -= principalPayment;
      if (remainingBalance < 0) remainingBalance = 0;
    }
    
    const principalPaid = loanAmount - remainingBalance;
    const homeValueAtEnd = buyHomePrice * Math.pow(1 + homeAppreciation / 100, timePeriod);
    const equity = buyDownPayment + principalPaid + (homeValueAtEnd - buyHomePrice);
    
    const totalBuyCost = (mortgagePayment * timePeriod * 12) + (buyPropertyTax * timePeriod) + (buyMaintenance * timePeriod) + buyDownPayment;
    
    setBuyTotalCost(totalBuyCost);
    setEquityBuilt(equity);
    setFinalHomeValue(homeValueAtEnd);
    setNetPosition(equity - rentCost);
  }, [rentMonthly, rentIncrease, buyHomePrice, buyDownPayment, buyInterestRate, buyPropertyTax, buyMaintenance, homeAppreciation, timePeriod]);

  const addScenario = () => {
    setScenarios([...scenarios, { id: nextId, amount: 400000, rate: 5.5, years: 25 }]);
    setNextId(nextId + 1);
  };

  const updateScenario = (id, field, value) => {
    setScenarios(scenarios.map(scenario => 
      scenario.id === id ? { ...scenario, [field]: value } : scenario
    ));
  };

  const removeScenario = (id) => {
    if (scenarios.length > 2) {
      setScenarios(scenarios.filter(scenario => scenario.id !== id));
    }
  };

  const calculateScenarioPayment = (amount, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    let payment = 0;
    
    if (monthlyRate === 0) {
      payment = amount / numberOfPayments;
    } else {
      payment = amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    
    const totalPaymentAmount = payment * numberOfPayments;
    const totalInterestAmount = totalPaymentAmount - amount;
    
    return { payment, totalPayment: totalPaymentAmount, totalInterest: totalInterestAmount };
  };


  return (
    <div className="calculator-page">
      <div className="calculator-header">
        <h1 className="calculator-title">Plan Your Mortgage</h1>
        <p className="calculator-subtitle">
          Compare options and calculate your mortgage with our interactive calculators
        </p>
      </div>

      <div className="calculator-tabs">
        <button className={`tab-btn ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => setActiveTab('payment')}>
          Payment
        </button>
        <button className={`tab-btn ${activeTab === 'affordability' ? 'active' : ''}`} onClick={() => setActiveTab('affordability')}>
          Affordability
        </button>
        <button className={`tab-btn ${activeTab === 'frequency' ? 'active' : ''}`} onClick={() => setActiveTab('frequency')}>
          Frequency
        </button>
        <button className={`tab-btn ${activeTab === 'compare' ? 'active' : ''}`} onClick={() => setActiveTab('compare')}>
          Compare
        </button>
        <button className={`tab-btn ${activeTab === 'rentvsbuy' ? 'active' : ''}`} onClick={() => setActiveTab('rentvsbuy')}>
          Rent vs Buy
        </button>
      </div>

      {/* Payment Calculator Tab */}
      {activeTab === 'payment' && (
        <div className="calculator-content">
          <div className="calculator-section">
            <h2 className="section-title">Loan Details</h2>
            <div className="input-group">
              <label>Loan Amount ($)</label>
              <input
                type="range"
                min="0"
                max="1000000"
                step="10000"
                value={paymentLoanAmount}
                onChange={(e) => setPaymentLoanAmount(Number(e.target.value))}
              />
              <div className="input-with-value">
                <input
                  type="number"
                  value={paymentLoanAmount}
                  onChange={(e) => setPaymentLoanAmount(Number(e.target.value))}
                />
                <span className="input-symbol">$</span>
              </div>
            </div>

            <div className="input-group">
              <label>Down Payment ($)</label>
              <input
                type="range"
                min="0"
                max={paymentLoanAmount}
                step="5000"
                value={paymentDownPayment}
                onChange={(e) => setPaymentDownPayment(Number(e.target.value))}
              />
              <div className="input-with-value">
                <input
                  type="number"
                  value={paymentDownPayment}
                  onChange={(e) => setPaymentDownPayment(Number(e.target.value))}
                />
                <span className="input-symbol">$</span>
                <span className="input-note">{((paymentDownPayment / paymentLoanAmount) * 100).toFixed(1)}% of loan amount</span>
              </div>
            </div>

            <div className="input-group">
              <label>Interest Rate (%)</label>
              <input
                type="range"
                min="0"
                max="15"
                step="0.1"
                value={paymentInterestRate}
                onChange={(e) => setPaymentInterestRate(Number(e.target.value))}
              />
              <input
                type="number"
                step="0.1"
                value={paymentInterestRate}
                onChange={(e) => setPaymentInterestRate(Number(e.target.value))}
              />
            </div>

            <div className="input-group">
              <label>Loan Term (Years)</label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={paymentLoanTerm}
                onChange={(e) => setPaymentLoanTerm(Number(e.target.value))}
              />
              <select value={paymentLoanTerm} onChange={(e) => setPaymentLoanTerm(Number(e.target.value))}>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>

            <p className="input-tip">Tip: drag the sliders or type values directly into the inputs.</p>
          </div>

          <div className="results-section">
            <h2 className="section-title">Monthly Payment</h2>
            <div className="estimated-payment">
              <p className="estimated-label">Estimated monthly payment</p>
              <p className="estimated-amount">${monthlyPayment.toFixed(2)}</p>
            </div>

            <div className="payment-summary">
              <div className="summary-item">
                <span>Total Interest</span>
                <strong>${totalInterest.toFixed(2)}</strong>
              </div>
              <div className="summary-item">
                <span>Total Payment</span>
                <strong>${totalPayment.toFixed(2)}</strong>
              </div>
            </div>

            <div className="payment-breakdown">
              <h3>Payment Breakdown</h3>
              <div className="breakdown-bars">
                <div className="breakdown-bar principal" style={{ width: `${(principalAmount / totalPayment) * 100}%` }}>
                  {((principalAmount / totalPayment) * 100).toFixed(0)}%
                </div>
                <div className="breakdown-bar interest" style={{ width: `${(totalInterest / totalPayment) * 100}%` }}>
                  {((totalInterest / totalPayment) * 100).toFixed(0)}%
                </div>
              </div>
              <div className="breakdown-labels">
                <span>Principal ${principalAmount.toFixed(2)}</span>
                <span>Interest ${totalInterest.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Move Forward?</h3>
            <p>These calculations are estimates. Contact us for a personalized consultation and to explore the best mortgage options for your specific situation.</p>
            <div className="cta-buttons">
              <button className="btn-contact">Contact Us for Details</button>
              <button className="btn-appointment">Book an Appointment</button>
            </div>
          </div>
        </div>
      )}

      {/* Affordability Calculator Tab */}
      {activeTab === 'affordability' && (
        <div className="calculator-content affordability-content">
          <div className="two-columns">
            <div className="left-column">
              <div className="calculator-section">
                <h2 className="section-title">Income & Debts</h2>
                <p className="section-note">Enter your financial details. All fields adjust with sliders.</p>
                
                <div className="input-group">
                  <label>Annual Gross Income ($)</label>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="5000"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  />
                  <div className="input-with-value">
                    <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} />
                    <span className="input-note">Monthly Income: ${(annualIncome / 12).toFixed(2)}</span>
                  </div>
                </div>

                <div className="input-group">
                  <label>Monthly Debt Payments ($)</label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={monthlyDebts}
                    onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                  />
                  <input type="number" value={monthlyDebts} onChange={(e) => setMonthlyDebts(Number(e.target.value))} />
                  <span className="input-note">Car loans, credit cards, student loans, etc.</span>
                </div>

                <div className="input-group">
                  <label>Down Payment ($)</label>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="5000"
                    value={affordabilityDownPayment}
                    onChange={(e) => setAffordabilityDownPayment(Number(e.target.value))}
                  />
                  <input type="number" value={affordabilityDownPayment} onChange={(e) => setAffordabilityDownPayment(Number(e.target.value))} />
                </div>
              </div>

              <div className="calculator-section">
                <h2 className="section-title">Mortgage & Housing Costs</h2>
                <p className="section-note">Set amortization, taxes, fees, and interest rate.</p>
                
                <div className="input-group">
                  <label>Interest Rate (%)</label>
                  <input type="range" min="0" max="15" step="0.1" value={affordabilityInterestRate} onChange={(e) => setAffordabilityInterestRate(Number(e.target.value))} />
                  <input type="number" step="0.1" value={affordabilityInterestRate} onChange={(e) => setAffordabilityInterestRate(Number(e.target.value))} />
                </div>

                <div className="input-group">
                  <label>Amortization (Years)</label>
                  <select value={amortizationYears} onChange={(e) => setAmortizationYears(Number(e.target.value))}>
                    <option value={15}>15 years</option>
                    <option value={20}>20 years</option>
                    <option value={25}>25 years</option>
                    <option value={30}>30 years</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Property Tax (Annually) ($)</label>
                  <input type="range" min="0" max="20000" step="500" value={propertyTax} onChange={(e) => setPropertyTax(Number(e.target.value))} />
                  <input type="number" value={propertyTax} onChange={(e) => setPropertyTax(Number(e.target.value))} />
                </div>

                <div className="input-group">
                  <label>Heating (Monthly) ($)</label>
                  <input type="range" min="0" max="500" step="25" value={heatingCost} onChange={(e) => setHeatingCost(Number(e.target.value))} />
                  <input type="number" value={heatingCost} onChange={(e) => setHeatingCost(Number(e.target.value))} />
                </div>

                <div className="input-group">
                  <label>Condo Fees (Monthly) – 50% counted in GDS/TDS ($)</label>
                  <input type="range" min="0" max="2000" step="50" value={condoFees} onChange={(e) => setCondoFees(Number(e.target.value))} />
                  <input type="number" value={condoFees} onChange={(e) => setCondoFees(Number(e.target.value))} />
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="results-card">
                <h3>Maximum Affordable Home Price</h3>
                <p className="result-amount">${maxHomePrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                <p className="result-sub">Monthly Payment: ${affordablePayment.toFixed(2)}</p>
              </div>

              <div className="results-card">
                <h3>Comfortable Home Price</h3>
                <p className="result-amount">${comfortableHomePrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                <p className="result-sub">28% GDS ratio for better financial flexibility</p>
              </div>

              <div className="results-card">
                <h3>Debt Service Ratios</h3>
                <div className="ratio-item">
                  <span>GDS Ratio (Gross Debt Service)</span>
                  <strong className={gdsRatio <= 32 ? 'good' : 'bad'}>{gdsRatio.toFixed(1)}%</strong>
                  <p className="ratio-note">Recommended: ≤32% | Max: 32%</p>
                </div>
                <div className="ratio-item">
                  <span>TDS Ratio (Total Debt Service)</span>
                  <strong className={tdsRatio <= 40 ? 'good' : 'bad'}>{tdsRatio.toFixed(1)}%</strong>
                  <p className="ratio-note">Recommended: ≤40% | Max: 40%</p>
                </div>
                <p className="ratio-explanation">
                  GDS Ratio includes housing costs (mortgage, property tax, heating, 50% condo fees)<br/>
                  TDS Ratio includes all housing costs plus other debt payments
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Frequency Calculator Tab */}
      {activeTab === 'frequency' && (
        <div className="calculator-content frequency-content">
          <div className="calculator-section">
            <h2 className="section-title">Mortgage Details</h2>
            <p className="section-note">Adjust your mortgage inputs and compare payment frequencies.</p>
            
            <div className="input-group">
              <label>Mortgage Amount ($)</label>
              <input type="range" min="0" max="1000000" step="10000" value={freqMortgageAmount} onChange={(e) => setFreqMortgageAmount(Number(e.target.value))} />
              <input type="number" value={freqMortgageAmount} onChange={(e) => setFreqMortgageAmount(Number(e.target.value))} />
            </div>

            <div className="input-group">
              <label>Interest Rate (%)</label>
              <input type="range" min="0" max="15" step="0.1" value={freqInterestRate} onChange={(e) => setFreqInterestRate(Number(e.target.value))} />
              <input type="number" step="0.1" value={freqInterestRate} onChange={(e) => setFreqInterestRate(Number(e.target.value))} />
            </div>

            <div className="input-group">
              <label>Amortization (Years)</label>
              <select value={freqAmortizationYears} onChange={(e) => setFreqAmortizationYears(Number(e.target.value))}>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>
          </div>

          <div className="frequency-results">
            <div className="frequency-card">
              <h3>Monthly</h3>
              <p className="payment-amount">${frequencyData.monthly.payment.toFixed(0)}</p>
              <p className="payment-detail">Payment Amount</p>
              <p className="interest-total">Total Interest Paid: ${frequencyData.monthly.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              <p className="time-info">Time to Pay Off: {frequencyData.monthly.years.toFixed(2)} years ({Math.round(frequencyData.monthly.payments)} payments)</p>
            </div>

            <div className="frequency-card">
              <h3>Bi-Weekly</h3>
              <p className="payment-amount">${frequencyData.biWeekly.payment.toFixed(0)}</p>
              <p className="payment-detail">Payment Amount</p>
              <p className="interest-total">Total Interest Paid: ${frequencyData.biWeekly.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              <p className="time-info">Time to Pay Off: {frequencyData.biWeekly.years.toFixed(2)} years ({Math.round(frequencyData.biWeekly.payments)} payments)</p>
              <p className="savings">Interest Savings: ${(frequencyData.monthly.totalInterest - frequencyData.biWeekly.totalInterest).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>

            <div className="frequency-card recommended">
              <h3>Accelerated Bi-Weekly <span className="recommended-badge">Recommended</span></h3>
              <p className="payment-amount">${frequencyData.accBiWeekly.payment.toFixed(0)}</p>
              <p className="payment-detail">Payment Amount</p>
              <p className="interest-total">Total Interest Paid: ${frequencyData.accBiWeekly.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              <p className="time-info">Time to Pay Off: {frequencyData.accBiWeekly.years.toFixed(2)} years ({Math.round(frequencyData.accBiWeekly.payments)} payments)</p>
              <p className="savings">Interest Savings: ${(frequencyData.monthly.totalInterest - frequencyData.accBiWeekly.totalInterest).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>

            <div className="frequency-card">
              <h3>Weekly</h3>
              <p className="payment-amount">${frequencyData.weekly.payment.toFixed(0)}</p>
              <p className="payment-detail">Payment Amount</p>
              <p className="interest-total">Total Interest Paid: ${frequencyData.weekly.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              <p className="time-info">Time to Pay Off: {frequencyData.weekly.years.toFixed(2)} years ({Math.round(frequencyData.weekly.payments)} payments)</p>
              <p className="savings">Interest Savings: ${(frequencyData.monthly.totalInterest - frequencyData.weekly.totalInterest).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>

            <div className="frequency-card">
              <h3>Accelerated Weekly</h3>
              <p className="payment-amount">${frequencyData.accWeekly.payment.toFixed(0)}</p>
              <p className="payment-detail">Payment Amount</p>
              <p className="interest-total">Total Interest Paid: ${frequencyData.accWeekly.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              <p className="time-info">Time to Pay Off: {frequencyData.accWeekly.years.toFixed(2)} years ({Math.round(frequencyData.accWeekly.payments)} payments)</p>
              <p className="savings">Interest Savings: ${(frequencyData.monthly.totalInterest - frequencyData.accWeekly.totalInterest).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
          </div>

          <div className="chart-section">
            <h3>Total Interest Comparison</h3>
            <div className="interest-comparison-chart">
              <div className="interest-bar-container">
                <div className="interest-bar" style={{ height: `${(frequencyData.monthly.totalInterest / frequencyData.monthly.totalInterest) * 200}px` }}>
                  <span className="interest-value">${(frequencyData.monthly.totalInterest / 1000).toFixed(0)}k</span>
                </div>
                <p>Monthly</p>
              </div>
              <div className="interest-bar-container">
                <div className="interest-bar" style={{ height: `${(frequencyData.biWeekly.totalInterest / frequencyData.monthly.totalInterest) * 200}px` }}>
                  <span className="interest-value">${(frequencyData.biWeekly.totalInterest / 1000).toFixed(0)}k</span>
                </div>
                <p>Bi-Weekly</p>
              </div>
              <div className="interest-bar-container">
                <div className="interest-bar" style={{ height: `${(frequencyData.accBiWeekly.totalInterest / frequencyData.monthly.totalInterest) * 200}px` }}>
                  <span className="interest-value">${(frequencyData.accBiWeekly.totalInterest / 1000).toFixed(0)}k</span>
                </div>
                <p>Acc. Bi-Weekly</p>
              </div>
              <div className="interest-bar-container">
                <div className="interest-bar" style={{ height: `${(frequencyData.weekly.totalInterest / frequencyData.monthly.totalInterest) * 200}px` }}>
                  <span className="interest-value">${(frequencyData.weekly.totalInterest / 1000).toFixed(0)}k</span>
                </div>
                <p>Weekly</p>
              </div>
              <div className="interest-bar-container">
                <div className="interest-bar" style={{ height: `${(frequencyData.accWeekly.totalInterest / frequencyData.monthly.totalInterest) * 200}px` }}>
                  <span className="interest-value">${(frequencyData.accWeekly.totalInterest / 1000).toFixed(0)}k</span>
                </div>
                <p>Acc. Weekly</p>
              </div>
            </div>
            <p className="chart-note">Lower bars = lower total interest</p>
          </div>

          <div className="frequency-explanation">
            <h3>Understanding Payment Frequencies</h3>
            <ul>
              <li><strong>Bi-weekly:</strong> Half your monthly payment every two weeks (26 payments/year = 13 months)</li>
              <li><strong>Accelerated Bi-weekly:</strong> Same as bi-weekly but equals 13 monthly payments per year</li>
              <li><strong>Weekly:</strong> Quarter of your monthly payment every week (52 payments/year)</li>
              <li><strong>Accelerated Weekly:</strong> Pays down your mortgage faster by making the equivalent of one extra monthly payment per year</li>
            </ul>
            <p className="tip">Tip: Accelerated payments can save you tens of thousands in interest and pay off your mortgage years earlier!</p>
          </div>

          <div className="cta-section">
            <h3>Want to Save on Interest?</h3>
            <p>Let's discuss payment frequency options and other strategies to pay off your mortgage faster.</p>
            <button className="btn-contact">Contact Us</button>
          </div>
        </div>
      )}

      {/* Compare Calculator Tab */}
      {activeTab === 'compare' && (
        <div className="calculator-content compare-content">
          <div className="scenarios-container">
            {scenarios.map((scenario, index) => {
              const { payment, totalPayment: totalPaymentAmount, totalInterest: totalInterestAmount } = calculateScenarioPayment(scenario.amount, scenario.rate, scenario.years);
              return (
                <div key={scenario.id} className="scenario-card">
                  <h3>Scenario {index + 1}</h3>
                  {scenarios.length > 2 && (
                    <button className="remove-scenario" onClick={() => removeScenario(scenario.id)}>×</button>
                  )}
                  <div className="input-group">
                    <label>Mortgage Amount ($)</label>
                    <input type="number" value={scenario.amount} onChange={(e) => updateScenario(scenario.id, 'amount', Number(e.target.value))} />
                  </div>
                  <div className="input-group">
                    <label>Interest Rate (%)</label>
                    <input type="number" step="0.1" value={scenario.rate} onChange={(e) => updateScenario(scenario.id, 'rate', Number(e.target.value))} />
                  </div>
                  <div className="input-group">
                    <label>Amortization (Years)</label>
                    <select value={scenario.years} onChange={(e) => updateScenario(scenario.id, 'years', Number(e.target.value))}>
                      <option value={15}>15 years</option>
                      <option value={20}>20 years</option>
                      <option value={25}>25 years</option>
                      <option value={30}>30 years</option>
                    </select>
                  </div>
                  <div className="scenario-results">
                    <p>Monthly Payment: <strong>${payment.toFixed(2)}</strong></p>
                    <p>Total Payment: <strong>${totalPaymentAmount.toFixed(2)}</strong></p>
                    <p>Total Interest: <strong>${totalInterestAmount.toFixed(2)}</strong></p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button className="add-scenario-btn" onClick={addScenario}>+ Add Scenario</button>

          <div className="comparison-table">
            <h3>Side-by-Side Comparison</h3>
            <table className="comparison-table-inner">
              <thead>
                <tr>
                  <th>Metric</th>
                  {scenarios.map((_, index) => <th key={index}>Scenario {index + 1}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mortgage Amount</td>
                  {scenarios.map(scenario => <td key={scenario.id}>${scenario.amount.toLocaleString()}</td>)}
                </tr>
                <tr>
                  <td>Interest Rate (%)</td>
                  {scenarios.map(scenario => <td key={scenario.id}>{scenario.rate}%</td>)}
                </tr>
                <tr>
                  <td>Amortization (Years)</td>
                  {scenarios.map(scenario => <td key={scenario.id}>{scenario.years}</td>)}
                </tr>
                {scenarios.map((scenario) => {
                  const { payment, totalPayment: totalPaymentAmount, totalInterest: totalInterestAmount } = calculateScenarioPayment(scenario.amount, scenario.rate, scenario.years);
                  return (
                    <React.Fragment key={scenario.id}>
                      <tr>
                        <td>Monthly Payment</td>
                        <td>${payment.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Total Payment</td>
                        <td>${totalPaymentAmount.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Total Interest</td>
                        <td>${totalInterestAmount.toFixed(2)}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
            <button className="export-pdf">Export to PDF</button>
          </div>

          <div className="cta-section">
            <h3>Need Help Choosing?</h3>
            <p>Not sure which mortgage option is right for you? Let's review your scenarios together.</p>
            <button className="btn-contact">Get Expert Advice</button>
          </div>
        </div>
      )}

      {/* Rent vs Buy Calculator Tab */}
      {activeTab === 'rentvsbuy' && (
        <div className="calculator-content rentvsbuy-content">
          <div className="two-columns">
            <div className="left-column">
              <div className="calculator-section">
                <h2 className="section-title">Renting</h2>
                <div className="input-group">
                  <label>Monthly Rent ($)</label>
                  <input type="range" min="500" max="10000" step="100" value={rentMonthly} onChange={(e) => setRentMonthly(Number(e.target.value))} />
                  <input type="number" value={rentMonthly} onChange={(e) => setRentMonthly(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Annual Rent Increase (%)</label>
                  <input type="range" min="0" max="10" step="0.5" value={rentIncrease} onChange={(e) => setRentIncrease(Number(e.target.value))} />
                  <input type="number" step="0.5" value={rentIncrease} onChange={(e) => setRentIncrease(Number(e.target.value))} />
                </div>
              </div>

              <div className="calculator-section">
                <h2 className="section-title">Buying Scenario</h2>
                <div className="input-group">
                  <label>Home Price ($)</label>
                  <input type="range" min="100000" max="2000000" step="25000" value={buyHomePrice} onChange={(e) => setBuyHomePrice(Number(e.target.value))} />
                  <input type="number" value={buyHomePrice} onChange={(e) => setBuyHomePrice(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Down Payment ($)</label>
                  <input type="range" min="0" max={buyHomePrice} step="5000" value={buyDownPayment} onChange={(e) => setBuyDownPayment(Number(e.target.value))} />
                  <input type="number" value={buyDownPayment} onChange={(e) => setBuyDownPayment(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Interest Rate (%)</label>
                  <input type="range" min="0" max="15" step="0.1" value={buyInterestRate} onChange={(e) => setBuyInterestRate(Number(e.target.value))} />
                  <input type="number" step="0.1" value={buyInterestRate} onChange={(e) => setBuyInterestRate(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Annual Property Tax ($)</label>
                  <input type="range" min="0" max="20000" step="500" value={buyPropertyTax} onChange={(e) => setBuyPropertyTax(Number(e.target.value))} />
                  <input type="number" value={buyPropertyTax} onChange={(e) => setBuyPropertyTax(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Annual Maintenance ($)</label>
                  <input type="range" min="0" max="10000" step="500" value={buyMaintenance} onChange={(e) => setBuyMaintenance(Number(e.target.value))} />
                  <input type="number" value={buyMaintenance} onChange={(e) => setBuyMaintenance(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Home Appreciation (%)</label>
                  <input type="range" min="0" max="10" step="0.5" value={homeAppreciation} onChange={(e) => setHomeAppreciation(Number(e.target.value))} />
                  <input type="number" step="0.5" value={homeAppreciation} onChange={(e) => setHomeAppreciation(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Time Period (Years)</label>
                  <input type="range" min="1" max="30" step="1" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} />
                  <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} />
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="results-card">
                <h3>Total Cost of Renting</h3>
                <p className="result-amount">${rentTotalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>

              <div className="results-card">
                <h3>Total Cost of Buying</h3>
                <p className="result-amount">${buyTotalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>

              <div className="results-card">
                <h3>Equity Built</h3>
                <p className="result-amount">${equityBuilt.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>

              <div className="results-card">
                <h3>After {timePeriod} Years</h3>
                <p>Home Value: ${finalHomeValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                <p className="net-position">Net Financial Position (vs Renting): ${netPosition.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                {netPosition > 0 ? (
                  <p className="positive">Buying would put you ahead financially in this period.</p>
                ) : (
                  <p className="negative">Renting might be better financially in this period.</p>
                )}
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Need Help Deciding?</h3>
            <p>The rent vs buy decision depends on many personal factors. Let's discuss your specific situation and find the best path forward for you.</p>
            <div className="cta-buttons">
              <button className="btn-contact">Schedule a Consultation</button>
              <button className="btn-appointment">Book an Appointment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;