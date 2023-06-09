// react and eco.
import { useContext } from 'react';
import { PgFormContext } from '@context/PgFormContext.context';
import { useGenerateQueryString } from './AddNewUserData.hooks';
import { GenericParagraph } from '@sharedComponents/text-related';

// ** AddNewUserData | component ** //
//
const AddNewUserData = () => {
  // * custom context setup * //
  const { addNewUserQueryData } = useContext(PgFormContext);

  // * custom hooks setup * //
  const { generateQueryComponents } = useGenerateQueryString(addNewUserQueryData);

  return (
    <>
      {generateQueryComponents.length > 1 && <GenericParagraph render={'The last successfully submitted query:'} />}
      {generateQueryComponents}
    </>
  );
};

export default AddNewUserData;
