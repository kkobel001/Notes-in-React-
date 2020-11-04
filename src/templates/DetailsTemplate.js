import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplates from './UserPageTemplates';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const DetailsTemplate = () => (
  <UserPageTemplates>
    <h1>Notes</h1>
    <p>
      m Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has
      been the industrys standard dummy text ever
      since the 1500s, when an unknown printer
      took a galley of type and scrambled it to
      make a type specimen book. It has survived
      not only five centuries, but also the leap
      in
    </p>
    <Link to="/">Go back</Link>
  </UserPageTemplates>
);

export default DetailsTemplate;
