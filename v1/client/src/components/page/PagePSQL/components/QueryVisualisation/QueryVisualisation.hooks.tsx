// component elements.
import {
  Command,
  DataField,
  ElementContainer,
} from './QueryVisualisation.styles';
// component types.
import { QueryVisualisationDataT } from '@context/PgFormContext.context';

// ** useCreateQueryElements | custom hook ** //
//
const useCreateQueryElements = (queryVisualisation: QueryVisualisationDataT[]) => {
  const queryElements = queryVisualisation.map(({ pgCommandOpen, dataFields, pgCommandClose }, index) => {
    const dataFieldElements = dataFields.map((field) => {
      return (
        <DataField key={field}>{field}</DataField>
      );
    });

    return (
      <ElementContainer key={index}>
        <Command>
          {pgCommandOpen}
        </Command>
        {dataFieldElements}
        <Command>
          {pgCommandClose}
        </Command>
      </ElementContainer>
    );
  });

  return {
    queryElements,
  };
};

export {
  useCreateQueryElements,
};
