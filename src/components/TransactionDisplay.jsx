import React, { useState, useEffect } from 'react';
import { calcSum } from '../helpers/calcSum';

const TransactionDisplay = ({ values, searchValue }) => {
  const [total, setTotal] = useState(0);
  const copiedValues = [...values];

  const filteredValues = copiedValues.filter(transaction =>
    transaction.merchant.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const sum = calcSum(filteredValues);
    setTotal(sum);
  }, [filteredValues]);

  return (
    <ul className="transaction-list">
      {filteredValues.map(transaction => (
        <li key={transaction.id} className="transaction-list-item">
          <p>{transaction.merchant}</p>
          <p style={{ color: transaction.amount < 0 ? '#a6423a' : '#388f7f' }}>
            {transaction.amount}
          </p>
        </li>
      ))}
      <hr></hr>
      <div className="total-display">
        <p>Total</p>
        <p style={{ fontSize: '22px' }}>{total}</p>
      </div>
    </ul>
  );
};

export default TransactionDisplay;
