import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
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
  children: PropTypes.element.isRequired,
  // eslint-disable-next-line react/require-default-props
  pageType: PropTypes.oneOf([
    'note',
    'twitter',
    'article',
  ]),
};

UserPageTemplates.defaultPropos = {
  pageType: 'none',
};
export default UserPageTemplates;
