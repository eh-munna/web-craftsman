import { createBrowserRouter } from 'react-router';
import App from '../App';
import Bookings from '../components/Bookings/Bookings';
import Contact from '../components/Contact/Contact';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardHome from '../components/Dashboard/DashboardHome';
import ErrorPage from '../components/Error/ErrorPage';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import PaymentProcessing from '../components/Payment/PaymentProcessing';
import StripePaymentWrapper from '../components/Payment/StripePaymentWrapper';
import AddService from '../components/Services/AddService';
import BookService from '../components/Services/BookService'; // Ensure correct path
import ManageServices from '../components/Services/ManageServices';
import Services from '../components/Services/Services';
import Signup from '../components/Signup/Signup';
import Users from '../components/Users/Users';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

function Routes() {
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
          loader: async ({ params }) => {
            try {
              const response = await fetch(
                `http://localhost:3000/services/${params._id}`
              );
              if (!response.ok) {
                throw new Error('Service not found');
              }
              return response.json();
            } catch (error) {
              throw new Response('Error loading service', { status: 500 });
            }
          },
          element: (
            <PrivateRoute>
              <BookService />
            </PrivateRoute>
          ),
        },
        { path: '/contact', element: <Contact /> },
        { path: '/signup', element: <Signup /> },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        { path: '/dashboard', element: <DashboardHome /> },
        { path: '/dashboard/bookings', element: <Bookings /> },
        {
          path: '/dashboard/users',
          element: (
            <AdminRoute>
              <Users />
            </AdminRoute>
          ),
        },
        {
          path: '/dashboard/add-service',
          element: (
            <AdminRoute>
              <AddService />
            </AdminRoute>
          ),
        },
        {
          path: '/dashboard/manage-services',
          element: (
            <AdminRoute>
              <ManageServices />
            </AdminRoute>
          ),
        },
        {
          path: '/dashboard/payment',
          element: <PaymentProcessing />,
        },
        {
          path: '/dashboard/stripe-payment',
          element: <StripePaymentWrapper />,
        },
      ],
    },
  ]);
  return router;
}
export default Routes;

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: '/', element: <Home /> },
//       {
//         path: 'services',
//         loader: async () =>
//           await fetch(`http://localhost:3000/services`, {
//             credentials: 'include',
//           }),
//         element: <Services />,
//       },
//       {
//         path: 'services/checkout/:_id',
//         loader: async ({ params }) => {
//           try {
//             const response = await fetch(
//               `http://localhost:3000/services/${params._id}`
//             );
//             if (!response.ok) {
//               throw new Error('Service not found');
//             }
//             return response.json();
//           } catch (error) {
//             throw new Response('Error loading service', { status: 500 });
//           }
//         },
//         element: (
//           <PrivateRoute>
//             <BookService />
//           </PrivateRoute>
//         ),
//       },
//       { path: 'contact', element: <Contact /> },
//       { path: 'signup', element: <Signup /> },
//       { path: 'login', element: <Login /> },
//     ],
//   },
//   {
//     path: '/dashboard',
//     element: (
//       <PrivateRoute>
//         <Dashboard />
//       </PrivateRoute>
//     ),
//     errorElement: <ErrorPage />,
//     children: [
//       { path: '', element: <DashboardHome /> },
//       { path: 'bookings', element: <Bookings /> },
//       {
//         path: 'users',
//         element: (
//           <AdminRoute>
//             <Users />
//           </AdminRoute>
//         ),
//       },
//       {
//         path: 'add-service',
//         element: (
//           <AdminRoute>
//             <AddService />
//           </AdminRoute>
//         ),
//       },
//     ],
//   },
// ]);

// export default router;
