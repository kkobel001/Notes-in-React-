/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplates = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);
UserPageTemplates.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

UserPageTemplates.defaultPropos = {
  pageType: 'notes',
};
export default UserPageTemplates;
