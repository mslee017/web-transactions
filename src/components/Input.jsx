import React from 'react';

const Input = ({ handleChange }) => {
  return (
    <div className="input-container">
      <h3>Search Transactions</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Input;
