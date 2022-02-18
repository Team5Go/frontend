import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider, useCart } from 'react-use-cart';

ReactDOM.render(
  <CartProvider>
  <Router>
    <App />
  </Router>
  </CartProvider>,
  document.getElementById('root')
);
