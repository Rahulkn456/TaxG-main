import React, { useState } from 'react';
import './GSTCalculator.css';

const GSTCalculator = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [total, setTotal] = useState(null);

  const calculateGST = () => {
    const gst = (parseFloat(amount) * parseFloat(gstRate)) / 100;
    const totalAmount = parseFloat(amount) + gst;
    setTotal(totalAmount.toFixed(2));
  };

  return (
    <div className="calculator">
      <h1>GST Calculator</h1>
      <div className="input-group">
        <label>Amount (₹):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="input-group">
        <label>GST Rate (%):</label>
        <input
          type="number"
          value={gstRate}
          onChange={(e) => setGstRate(e.target.value)}
          placeholder="Enter GST rate"
        />
      </div>
      <button onClick={calculateGST}>Calculate</button>
      {total !== null && (
        <div className="result">
          <h2>Total Amount (Including GST): ₹{total}</h2>
        </div>
      )}
    </div>
  );
};

export default GSTCalculator;
