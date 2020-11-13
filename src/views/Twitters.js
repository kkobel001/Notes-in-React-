/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
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
          cardType="twitters"
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

export default connect(mapStateToProps)(Twitters);
