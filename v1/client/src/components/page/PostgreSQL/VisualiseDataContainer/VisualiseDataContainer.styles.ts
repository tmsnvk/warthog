import styled from 'styled-components';

const VisualiseDataContainer = styled.section`
  grid-column: 2 / 3;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 5rem 7.5rem;
  background-color: ${({ theme }) => theme.colorBackground.secondary};
  border: 0.1rem ${({ theme }) => theme.colorBackground.tertiary} solid;
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
`;

export default VisualiseDataContainer;
