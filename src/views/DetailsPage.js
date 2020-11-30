/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setStete({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(
          `htto://localhost:9000/api/user/register/${id}`,
        )
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  if (state[ownProps.pageContext].length) {
    return {
      activeItem: state[
        ownProps.pageContext
      ].filter(
        (item) =>
          item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(
  connect(mapStateToProps)(DetailsPage),
);
