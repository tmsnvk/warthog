// react and eco.
import { useContext } from 'react';
import { PgFormContext } from '@context/PgFormContext.context';
import { useCreateTableElements } from './TableVisualisation.hooks';
import { GenericParagraph } from '@sharedComponents/text-related';
// component elements.
import { SectionContainer } from './TableVisualisation.styles';

// ** TableVisualisation | component ** //
//
const TableVisualisation = () => {
  // * custom context setup * //
  const { tableVisualisation } = useContext(PgFormContext);

  // * custom hooks setup * //
  const { tableElements } = useCreateTableElements(tableVisualisation);

  return (
    tableVisualisation[0].tableName.length > 1 ?
      <SectionContainer as={'section'}>
        <GenericParagraph render={'The row(s) appended to the database as a result of the last successful data query:'} />
        {tableElements}
      </SectionContainer> : null
  );
};

export default TableVisualisation;
