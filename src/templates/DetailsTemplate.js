/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import UserPageTemplates from './UserPageTemplates';
// import styled from 'styled-components';

const DetailsTemplate = ({
  children,
  pageType,
}) => (
  <UserPageTemplates pageType={pageType}>
    {children}
    <Link to="/">Go back</Link>
  </UserPageTemplates>
);

export default DetailsTemplate;
