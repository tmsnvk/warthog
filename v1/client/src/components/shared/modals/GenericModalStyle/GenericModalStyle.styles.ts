// external packages.
import styled from "styled-components";

const GenericModalStyle = styled.div`
  z-index: 100;
  width: 50rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5rem 0 2.5rem 0;
  background-color: ${({ theme }) => theme.colorBackground.primary};
  color: ${({ theme }) => theme.color.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  letter-spacing: 0.25rem;
  border: 0.3rem ${({ theme }) => theme.color.secondary} solid;
  border-radius: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export {
  GenericModalStyle
};