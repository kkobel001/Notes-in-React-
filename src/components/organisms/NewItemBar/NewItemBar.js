import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid
    ${({ theme, activecolor }) =>
      theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(
    ${({ isVisible }) =>
      isVisible ? '0' : '100%'}
  );
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  margin: 30px 0 100px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;
const NewItemBar = ({
  pageContext,
  isVisible,
  addItem,
}) => (
  <StyledWrapper
    isVisible={isVisible}
    activecolor={pageContext}
  >
    <Heading big> Create new</Heading>
    <StyledInput
      placeholder={
        pageContext === 'twitters'
          ? 'Account name eg. hello_roman'
          : 'Title'
      }
    />
    {pageContext === 'articakes' && (
      <StyledInput placeholder="link" />
    )}
    <StyledTextArea
      as="textarea"
      placeholder="title"
    />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: 'Hello Roman',
          content: 'lorem impahdfhfhf',
        })
      }
      activecolor={pageContext}
    >
      Add note
    </Button>
  </StyledWrapper>
);
NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articales',
  ]),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) =>
    dispatch(
      addItemAction(itemType, itemContent),
    ),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
