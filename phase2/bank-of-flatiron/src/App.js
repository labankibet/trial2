import React, { useState } from 'react';
import './App.css';
import transactionsData from './transactionsData'; // Import your data
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [filteredTransactions, setFilteredTransactions] = useState(transactionsData);
  const [search, setSearch] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Bank Transactions</h1>
        <SearchBar handleSearch={handleSearch} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default App;
