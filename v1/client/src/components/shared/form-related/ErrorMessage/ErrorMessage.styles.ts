// external packages.
import styled from "styled-components";

const ErrorMessageContainer = styled.p`
  align-self: center;
  width: 100%;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  padding: 2rem 0 0 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export {
  ErrorMessageContainer
};