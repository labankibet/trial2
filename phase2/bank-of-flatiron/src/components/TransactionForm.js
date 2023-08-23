import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date: new Date().toISOString(),
      description,
      category,
      amount: parseFloat(amount),
      id: Date.now(),
    };
    addTransaction(newTransaction);
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for description, category, and amount */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;