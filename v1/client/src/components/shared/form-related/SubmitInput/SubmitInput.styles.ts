// external packages.
import styled from 'styled-components';

const SubmitInput = styled.input`
  align-self: center;
  width: fit-content;
  height: 6rem;
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
  background-color: ${({ theme }) => theme.colorBackground.tertiary};
  color: ${({ theme }) => theme.color.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
  border: 0.3rem ${({ theme }) => theme.colorBackground.tertiary} solid;
  border-radius: 1rem;
  cursor: pointer;

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colorBackground.secondary};
    color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

export default SubmitInput;
