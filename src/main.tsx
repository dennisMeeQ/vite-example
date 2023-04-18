import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { App } from '@/App';
import { ThemeProvider } from '@/themes';

// We wait for the service worker to start before rendering the application
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
