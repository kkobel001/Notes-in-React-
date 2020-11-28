/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMound() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate>
        {twitters.map(
          ({
            title,
            content,
            twitterName,
            created,
            id,
          }) => (
            <Card
              id={id}
              title={title}
              content={content}
              twitterName={twitterName}
              created={created}
              key={id}
            />
          ),
        )}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardeType: PropTypes.string.isRequired,
      titile: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterNAme: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};
const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () =>
    dispatch(fetchItems('twitters')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
