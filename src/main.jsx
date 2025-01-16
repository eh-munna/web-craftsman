import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import AppliedJobs from './components/Job/AppliedJobs/AppliedJobs';
import JobDetails from './components/Job/JobDetails/JobDetails';
import Services from './components/Services/Services';
import useJobLoader from './hooks/useJobLoader';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/job/:jobId',
        loader: useJobLoader,
        element: <JobDetails />,
      },
      {
        path: '/applied-jobs',
        loader: async () => await fetch(`/data.json`),
        element: <AppliedJobs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
