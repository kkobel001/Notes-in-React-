/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
// import Sidebar from 'components/organisms/Sidebar/Sidebar';

const MainTemplates = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </div>
);

MainTemplates.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplates;
