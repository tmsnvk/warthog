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

const Description = styled.p`
  margin: 0 0 1.5rem 0;
  font-weight: bold;
`;

const Instructions = styled.ul`

`;

const ListElement = styled.li`
  margin: 0.5rem 0 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  list-style: square;
  list-style-position: inside;
`;

export {
  ArticleContainer,
  Title,
  Description,
  Instructions,
  ListElement,
};
