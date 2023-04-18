/* eslint-disable import/export */
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './themes';

const AllTheProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

//  override render method and add userEvent
export { customRender as render, userEvent };
