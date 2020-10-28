import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/mainTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parametres = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
