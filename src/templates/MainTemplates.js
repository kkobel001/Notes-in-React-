/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PageContext from 'context';
import { theme } from 'theme/mainTheme';

class MainTemplates extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = [
      'twitters',
      'articales',
      'notes',
    ];
    const {
      location: { pathname },
    } = this.props;

    const [
      currentPage,
    ] = pageTypes.filter((page) =>
      pathname.includes(page),
    );
    this.setState({ pageType: currentPage });

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
      // eslint-disable-next-line no-console
      console.log(this.state);
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

MainTemplates.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(MainTemplates);
