// component elements.
import {
  ColumnContainer,
  ColumnDivider,
  Element,
  Elements,
  TableName,
} from './TableVisualisation.styles';
// component types.
import { TableVisualisationDataT } from '@context/PgFormContext.context';

// ** useCreateTableElements | custom hook ** //
//
const useCreateTableElements = (tableVisualisation: TableVisualisationDataT[]) => {
  const tableElements = tableVisualisation.map(({ tableName, tableColumns }) => {
    const columns = tableColumns.map((columnElement) => {
      const columnElements = columnElement.map((element) => {
        return (
          <Element key={element}>{element}</Element>
        );
      });

      return (
        <Elements key={columnElement[0]}>
          {columnElements}
        </Elements>
      );
    });

    return (
      <ColumnContainer key={tableName}>
        <TableName>
          &apos;{tableName}&apos; table
        </TableName>
        <ColumnDivider>
          {columns}
        </ColumnDivider>
      </ColumnContainer>
    );
  });

  return {
    tableElements,
  };
};

export {
  useCreateTableElements,
};
