// external packages.
import styled from 'styled-components';

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 0 1.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const Instructions = styled.ul`

`;

const ListElement = styled.li`
  margin: 0.5rem 0 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  list-style: square;
`;

export {
  ArticleContainer,
  Title,
  Instructions,
  ListElement,
};
