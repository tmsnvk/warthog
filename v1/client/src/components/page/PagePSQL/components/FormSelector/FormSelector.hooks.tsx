// component elements.
import {
  ButtonCategoryContainer,
  OptionButton,
} from './FormSelector.styles';
// component types.
import { FormSelectorT } from './FormSelector.types';

// ** generateOptionButtons | helper function ** //
//
const generateOptionButtons = ({ options, handleClick }: FormSelectorT, category: string) => {
  return options.filter((option) => option.buttonCategory === category).map(({ buttonName, isActive }) => {
    return (
      <OptionButton key={buttonName} onClick={() => handleClick(buttonName)} $isActive={isActive}>{buttonName}</OptionButton>
    );
  });
};

// ** useGenerateFormButtons | custom hook ** //
// a custom hook to generate the button list that enables the choice of various queries.
const useGenerateFormButtons = ({ options, handleClick }: FormSelectorT) => {
  const operations = [
    generateOptionButtons({ options, handleClick }, 'basic'),
    generateOptionButtons({ options, handleClick }, 'student'),
    generateOptionButtons({ options, handleClick }, 'mentor'),
  ];

  const operationButtons = operations.map((operation, index) => {
    return (
      <ButtonCategoryContainer key={index}>{operation}</ButtonCategoryContainer>
    );
  });

  return {
    operationButtons,
  };
};

export {
  useGenerateFormButtons,
};
