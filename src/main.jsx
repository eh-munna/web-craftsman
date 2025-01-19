import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import UpdateUser from './components/Users/UpdateUser';
import UserManagement from './components/Users/UserManagement';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/users',
        loader: async () => await fetch('http://localhost:3000/users'),
        element: <UserManagement />,
      },
      {
        path: '/users/:userId',
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/users/${params?.userId}`),
        element: <UpdateUser />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
