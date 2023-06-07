// external packages.
import styled from 'styled-components';

const GenericComponentContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBackground.secondary};
  border: 0.3rem ${({ theme }) => theme.colorBackground.tertiary} solid;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
`;

export default GenericComponentContainer;
