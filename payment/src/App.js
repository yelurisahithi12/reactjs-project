// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PaymentPage from './components/PaymentPage';
import ViewTransactionsPage from './components/ViewTransactionsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        
        <Route path="/transactions" element={<ViewTransactionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
