import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import PrivateRoute from './Routes/PrivateRoute';
import Bookings from './components/Bookings/Bookings';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import BookService from './components/Services/BookService';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';
import './index.css';
import AuthProvider from './providers/AuthProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminRoute from './Routes/AdminRoute';
import DashboardHome from './components/Dashboard/DashboardHome';
import Users from './components/Users/Users';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/services',
        loader: async () =>
          await fetch(`http://localhost:3000/services`, {
            credentials: 'include',
          }),
        element: <Services />,
      },
      {
        path: '/services/checkout/:_id',
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/services/${params._id}`),
        element: (
          <PrivateRoute>
            <BookService />
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />,
      },
      {
        path: '/dashboard/bookings',
        element: <Bookings />,
      },
      {
        path: '/dashboard/users',
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
