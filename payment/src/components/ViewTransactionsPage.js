// src/components/ViewTransactionsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:5000/transactions');
      setTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <div className="transactions-grid">
        {transactions.map((transaction) => (
          <div key={transaction.transactionId} className="transaction-card">
            <h3>{transaction.name}</h3>
            <p>Amount: ${transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTransactionsPage;
