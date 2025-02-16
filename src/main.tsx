import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { ThemeProvider } from './providers/theme-provider.tsx';
import store from './redux/store.ts';
import routes from './routes/Routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
