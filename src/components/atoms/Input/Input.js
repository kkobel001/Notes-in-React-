/* eslint-disable no-undef */
import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.bold};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) =>
    theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) =>
        theme.fontSizeS};

      background-size: 20px;
      bakcground-position: 10px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
