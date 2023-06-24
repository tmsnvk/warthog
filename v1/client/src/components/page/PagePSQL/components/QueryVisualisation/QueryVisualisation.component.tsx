// react and eco.
import { useContext } from 'react';
import { PgFormContext } from '@context/PgFormContext.context';
import { useCreateQueryElements } from './QueryVisualisation.hooks';
import { GenericParagraph } from '@sharedComponents/text-related';

// ** QueryVisualisation | component ** //
//
const QueryVisualisation = () => {
  // * custom context setup * //
  const { queryVisualisation } = useContext(PgFormContext);

  // * custom hooks setup * //
  const { queryElements } = useCreateQueryElements(queryVisualisation);

  return (
    <>
      {queryElements.length > 1 && <GenericParagraph render={'The last successful query:'} />}
      {queryElements}
    </>
  );
};

export default QueryVisualisation;
