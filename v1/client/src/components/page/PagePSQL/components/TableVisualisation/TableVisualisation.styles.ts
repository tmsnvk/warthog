// external packages.
import styled from 'styled-components';
// component elements.
import { GenericComponentContainer } from '@sharedComponents/wrappers';

const SectionContainer = styled(GenericComponentContainer)`
  grid-column: 2 / 3;
  grid-row: 3;
  padding: 5rem 7.5rem 5rem 7.5rem;
  overflow-wrap: break-word;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 2.5rem 0;
`;

const TableName = styled.p`
  margin: 0 0 5rem 0;
  font-size: 1.8rem;
  font-weight: bold;
`;

const ColumnDivider = styled.div`
  display: flex;
  flex-direction: row;
`;

const Elements = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 0.1rem dotted ${({ theme }) => theme.color.primaryDark};;

  &:last-of-type {
    border-right: 0;
  }
`;

const Element = styled.p`
  padding: 2rem 2.5rem 2rem 2.5rem;
  text-align: center;
  font-size: 1.6rem;
  border-top: 0.1rem dotted ${({ theme }) => theme.color.primaryDark};;
  overflow-wrap: anywhere;

  &:first-of-type {
    font-weight: bold;
    border: 0;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

export {
  SectionContainer,
  ColumnContainer,
  TableName,
  Element,
  Elements,
  ColumnDivider,
};
