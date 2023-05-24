// external packages.
import styled from 'styled-components';

const Submit = styled.input`
  align-self: center;
  width: auto;
  height: 7rem;
  padding: 0 1rem 0 1rem;
  background-color: ${({ theme }) => theme.colorBackground.tertiary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
  border: 0.1rem ${({ theme }) => theme.colorBackground.secondary} solid;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colorBackground.primary};
    color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
  }

  &:focus {
    outline: none;
  }
`;

export default Submit;
