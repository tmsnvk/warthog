// component elements.
import {
  Command,
  DataField,
  ElementContainer,
} from './QueryReturnData.styles';
// component types.
import { GeneralQueryDataT } from '@context/PgFormContext.context';

// ** useGenerateQueryString | custom hook ** //
//
const useGenerateQueryString = (createRecordQueryData: GeneralQueryDataT[]) => {
  const generateQueryComponents = createRecordQueryData.map(({ pgCommandOpen, dataFields, pgCommandClose }, index) => {
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
