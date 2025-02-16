import App from '@/App';
import About from '@/pages/About/About';
import Home from '@/pages/Home/Home';
import Tasks from '@/pages/Tasks/Tasks';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/tasks',
        element: <Tasks />,
      },
    ],
  },
]);

export default routes;
