import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { ReservationProvider } from './context/ReservationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ReservationProvider>
        <App />
      </ReservationProvider>
    </CartProvider>
  </React.StrictMode>
);
