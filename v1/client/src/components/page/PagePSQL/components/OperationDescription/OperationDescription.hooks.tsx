// component elements.
import { ListElement } from './OperationDescription.styles';
// component types.
import { OperationDescriptionHookT } from './OperationDescription.types';

// ** useGenerateDescriptionList | custom hook ** //
//
const useGenerateDescriptionList = (instructionsBody: OperationDescriptionHookT) => {
  const listElements = instructionsBody.map((text) => {
    return (
      <ListElement key={text}>{text}</ListElement>
    );
  });

  return {
    listElements,
  };
};

export {
  useGenerateDescriptionList,
};
