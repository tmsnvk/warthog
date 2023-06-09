// external packages.
import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0 0 5rem 0;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: bold;
`;

export {
  Paragraph,
};
