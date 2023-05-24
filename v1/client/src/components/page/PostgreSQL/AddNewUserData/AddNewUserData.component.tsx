// react and eco.
import { useContext } from 'react';
import { PgFormContext } from '@context';
// component elements.
import {
  Command,
  DataField,
  ElementContainer,
} from './AddNewUserData.styles';

// ** AddNewUserData | component ** //
//
const AddNewUserData = () => {
  const { addNewUserQueryData } = useContext(PgFormContext);

  const visualisedData = addNewUserQueryData.map(({ pgCommandOpen, dataFields, pgCommandClose }, index) => {
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

  return (
    <>
      {visualisedData}
    </>
  );
};

export default AddNewUserData;
