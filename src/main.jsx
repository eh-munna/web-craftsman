import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import ProductDetail from './components/Products/Product/ProductDetail/ProductDetail';
import Products from './components/Products/Products';
import './index.css';
import dataLoader from './utils/dataLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        loader: async () => await fetch('/data.json'),
        element: <Products />,
      },
      {
        path: '/product/:id',
        loader: dataLoader,
        element: <ProductDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: '/products',
  //   element: <Products />,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
