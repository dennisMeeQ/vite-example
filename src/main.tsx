import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { App } from '@/App';
import { ThemeProvider } from '@/themes';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
