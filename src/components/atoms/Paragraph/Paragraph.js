import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: ${({ theme }) => theme.regular};
`;

export default Paragraph;
