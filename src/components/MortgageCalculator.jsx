import React, { useState } from 'react';

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  React.useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="calculator-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <h2 style={{ color: '#1e3c72', marginBottom: '1.5rem' }}>Mortgage Calculator</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Interest Rate (%)</label>
        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Loan Term (years)</label>
        <select
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}
        >
          <option value={15}>15 years</option>
          <option value={20}>20 years</option>
          <option value={30}>30 years</option>
        </select>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#1e3c72', borderRadius: '5px', textAlign: 'center' }}>
        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Monthly Payment</h3>
        <p style={{ color: '#ffd700', fontSize: '2rem', fontWeight: 'bold' }}>
          ${monthlyPayment.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default MortgageCalculator;