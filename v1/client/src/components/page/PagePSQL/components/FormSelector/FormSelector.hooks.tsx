// component elements.
import { OptionButton } from './FormSelector.styles';
// component types.
import { FormSelectorT } from './FormSelector.types';

// ** useGenerateFormBtns | custom hook ** //
// a custom hook to generate the button list that enables the choice of various queries.
const useGenerateFormButtons = ({ options, handleClick }: FormSelectorT): { optionItems: JSX.Element[] } => {
  const optionItems = options.map(({ btnName, isActive }) => {
    return (
      <OptionButton key={btnName} onClick={() => handleClick(btnName)} $isActive={isActive}>{btnName}</OptionButton>
    );
  });

  return {
    optionItems,
  };
};

export {
  useGenerateFormButtons,
};
