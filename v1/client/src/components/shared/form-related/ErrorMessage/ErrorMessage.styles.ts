// external packages.
import styled from 'styled-components';

const ErrorMessageContainer = styled.p`
  padding: 0 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  color: ${({ theme }) => theme.color.error};
`;

export {
  ErrorMessageContainer,
};
