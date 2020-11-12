/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplates = ({
  children,
  pageType,
}) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);
UserPageTemplates.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,

  // eslint-disable-next-line react/require-default-props
  pageType: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
};

UserPageTemplates.defaultPropos = {
  pageType: 'notes',
};
export default UserPageTemplates;
