import React from 'react';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import { theme } from './theme/mainTheme';

export const decorators = [
  (Story) => (
    <Router>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Router>
  ),
];

export const parametres = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
