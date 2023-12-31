import React from 'react';

const TransactionRow = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>${transaction.amount}</td>
    </tr>
  );
};

export default TransactionRow;
