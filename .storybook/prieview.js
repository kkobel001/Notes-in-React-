import react from 'react';
import { witKnobs } from '@storybook/addon-knobs';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));
