/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LogoutIcon from 'assets/icons/logout.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;
const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : 'white'};
  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;
const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSizeS};
`;
const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid
    ${({ theme }) => theme.twitter};
  position: absolute;
  right: 25px;
  top: 50%;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background-color: white url(${LogoutIcon})
    no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
// eslint-disable-next-line react/prop-types
const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <Heading>Hello Roman</Heading>
      <DateInfo> 3 days</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://avatars.io/twitter/hello_roman" />
      )}
      {cardType === 'article' && (
        <StyledLinkButton href="https://youtube.com/helloroman" />
      )}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        ahdhdhffjhhfrhfhffhfhfhfh fhfhhfhf
        fhffjfjfj jfjfjjf fjjfjfjfjf fjfhhff
        fjfjjfjfj fjfhhfffjfj fjfjjfjfjfj
      </Paragraph>
      <Button secondary> REMOVE </Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf([
    'note',
    'twitter',
    'article',
  ]),
};
Card.defaultProps = {
  cardType: 'note',
};
export default Card;
