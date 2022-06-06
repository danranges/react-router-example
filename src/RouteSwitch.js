import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
