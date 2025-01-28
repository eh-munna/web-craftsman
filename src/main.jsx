import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes/Routes';
import './index.css';
import AuthProvider from './providers/AuthProvider';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes()} />
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
  </StrictMode>
);
