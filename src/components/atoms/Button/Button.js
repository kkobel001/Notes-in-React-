import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: ${({ activecolor, theme }) =>
    theme[activecolor]};
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
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
