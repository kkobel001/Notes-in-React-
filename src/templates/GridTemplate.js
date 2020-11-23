/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
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
  grid-template-columns: repeat(3, 1f);
  grid-gap: 85px;
  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
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
  font-weight: ${({ theme }) => theme.bold};
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
class GridTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { isNewItemBartVisible: false };

    toggleNewItemBar = () => {
      this.setState((prevState) => ({
        isNewItemBarVisible: !prevState.isNewItemBarVisible,
      }));
    };
  }

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
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
            onClick={this.toggleNewItemBar}
            icon={plusIcon}
            activecolor={pageContext}
          />
          <NewItemBar
            handleClose={this.toggleNewItemBar}
            isVisible={isNewItemBarVisible}
          />
        </StyledWrapper>
      </UserPageTemplates>
    );
  }
}
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
