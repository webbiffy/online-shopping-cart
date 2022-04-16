import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/App';
import { QueryClient, QueryClientProvider } from 'react-query'
import { CartProvider } from './application/contexts/cart/cart-context';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <App />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
