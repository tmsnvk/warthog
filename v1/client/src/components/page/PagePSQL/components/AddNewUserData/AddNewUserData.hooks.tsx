// component elements.
import {
  Command,
  DataField,
  ElementContainer,
} from './AddNewUserData.styles';
// component types.
import { GeneralQueryDataT } from '@context/PgFormContext.context';

// ** useGenerateQueryString | custom hook ** //
//
const useGenerateQueryString = (addNewUserQueryData: GeneralQueryDataT[]) => {
  const generateQueryComponents = addNewUserQueryData.map(({ pgCommandOpen, dataFields, pgCommandClose }, index) => {
    const visualiseDataFields = dataFields.map((field) => {
      return (
        <DataField key={field}>{field}</DataField>
      );
    });

    return (
      <ElementContainer key={index}>
        <Command>
          {pgCommandOpen}
        </Command>
        {visualiseDataFields}
        <Command>
          {pgCommandClose}
        </Command>
      </ElementContainer>
    );
  });

  return {
    generateQueryComponents,
  };
};

export {
  useGenerateQueryString,
};
