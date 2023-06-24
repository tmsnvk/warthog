// react and eco.
import { useContext } from 'react';
import { PgFormContext } from '@context/PgFormContext.context';
import { useGenerateQueryString } from './QueryReturnData.hooks';
import { GenericParagraph } from '@sharedComponents/text-related';

// ** QueryReturnData | component ** //
//
const QueryReturnData = () => {
  // * custom context setup * //
  const { createRecordQueryData } = useContext(PgFormContext);

  // * custom hooks setup * //
  const { generateQueryComponents } = useGenerateQueryString(createRecordQueryData);

  return (
    <>
      {generateQueryComponents.length > 1 && <GenericParagraph render={'The last successfully submitted query:'} />}
      {generateQueryComponents}
    </>
  );
};

export default QueryReturnData;
