import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSizexl : theme.fontSizel};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
