import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.note};
  /* background-color: ${({ color }) =>
    color || 'hsl(49,100%,58%)'}; */
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ( ${({ theme }) =>
        theme.secondary};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `};
`;

export default Button;

//
