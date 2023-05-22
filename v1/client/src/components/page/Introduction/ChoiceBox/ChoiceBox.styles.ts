// external packages.
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75rem;
  height: 45rem;
  margin: 20rem auto 0 auto;
  padding: 0 0 5rem 0;
  background-color: ${({ theme }) => theme.colorBackground.tertiary};
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.color.secondary};
`;

export {
  SectionContainer,
};
