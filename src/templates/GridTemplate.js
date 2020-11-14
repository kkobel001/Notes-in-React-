/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplates from 'templates/UserPageTemplates';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat() (3, 1fr);
  grid-gap: 85px;
`;
const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;
const StyledHeading = styled(Heading)`
  margin: 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontbold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 45px;
  background-color: ${({ activeColor, theme }) =>
    theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 1000;
`;
const GridTemplate = ({
  children,
  pageContext,
}) => (
  <UserPageTemplates>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <StyledParagraph>
          6 {pageContext}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
      <StyledButtonIcon
        icon={plusIcon}
        activecolor={pageContext}
      />
      <NewItemBar />
    </StyledWrapper>
  </UserPageTemplates>
);
GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
    .isRequired,

  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
};

GridTemplate.defaultPropos = {
  pageContext: 'notes',
};
export default withContext(GridTemplate);
