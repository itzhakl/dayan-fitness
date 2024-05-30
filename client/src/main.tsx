import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  clientId:
    'ATCB3Am1hAzH0XI4GYTtrgM49MNwv0Dj5e4x6DxR1eYhbl21-ZndynFTOIvrgm-FkuAabaPeiikP6yC3',
  currency: 'ILS',
  intent: 'capture',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>,
);
