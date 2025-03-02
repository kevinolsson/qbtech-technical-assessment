import { render as rtlRender } from '@testing-library/react';
import { ReactNode } from 'react';

const render = (ui: ReactNode) => {
  return rtlRender(ui);
};

export * from '@testing-library/react';
export { render };