/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;

      case routes.articale:
        this.setState({ pageType: 'articles' });
        break;

      default:
        console.log(
          'Something went wrong with matching paths',
        );
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up them Vue ends',
      content:
        'Lorem imsim dolor sit amet consectetyr . Delectus, tempora, quibusdam nautes modi ',
      twitterName: 'hello_roman',
      articleUrl: 'https//youtube.com/helloroman',
      creted: ' 1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        titile={dummyArticle}
        created={dummyArticle.creted}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

DetailsPage.PropTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
