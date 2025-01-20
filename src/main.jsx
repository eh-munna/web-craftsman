import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import PrivateRoute from './Routes/PrivateRoute';
import Bookings from './components/Bookings/Bookings';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ServiceCheckout from './components/Services/ServiceCheckout';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';
import './index.css';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/services',
        loader: async () => await fetch(`http://localhost:3000/services`),
        element: <Services />,
      },
      {
        path: '/services/checkout/:_id',
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/services/${params._id}`),
        element: (
          <PrivateRoute>
            <ServiceCheckout />
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
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
