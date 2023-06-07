// component elements.
import { ListElement } from './ButtonDescription.styles';
// component types.
import { ButtonDescriptionHookT } from './ButtonDescription.types';

// ** useGenerateDescList | custom hook ** //
//
const useGenerateDescList = (instructionsBody: ButtonDescriptionHookT): { listElements: JSX.Element[] } => {
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
  useGenerateDescList,
};
