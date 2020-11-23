/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor
      ? theme[activeColor]
      : theme.note};
  display: flex;
  flex-direction: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url() (${plusIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink to="/notes" />
    <StyledLinksList>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/"
          icon={penIcon}
          activeclass="active"
        />
      </li>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/twitters"
          icon={twitterIcon}
          activeclass="active"
        />
      </li>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/articales"
          icon={bulbIcon}
          activeclass="active"
        />
      </li>
    </StyledLinksList>
    <StyledLogoutButton
      as={NavLink}
      to="/"
      icon={logoutIcon}
    />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
};

Sidebar.defaultPropos = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
