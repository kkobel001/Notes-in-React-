/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    // eslint-disable-next-line default-case
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;

      case routes.articale:
        this.setState({ pageType: 'articles' });
        break;
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { match } = this.props;

    return (
      <DetailsTemplate
        pageType={this.state.pageType}
      >
        <p>{this.state.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
