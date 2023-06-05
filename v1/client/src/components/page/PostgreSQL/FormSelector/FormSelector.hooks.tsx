// react and eco.

// component elements.
import { OptionButton } from './FormSelector.styles';
// component types.
import { FormOptionsT } from '@individualPages/Database-PostgreSQL/PagePSQL.types';
import { FormSelectorT } from './FormSelector.types';


// ** useGenerateFormBtns | custom hook ** //
//
const useGenerateFormBtns = ({ options, handleClick }: FormSelectorT): JSX.Element[] => {
  const optionItems = options.map(({ btnName, isActive }) => {
    return (
      <OptionButton key={btnName} onClick={() => handleClick(btnName)} $isActive={isActive}>{btnName}</OptionButton>
    );
  });

  return optionItems;
};

// ** useFindActiveOptionIndex | custom hook ** //
//
const useFindActiveOptionIndex = (options: FormOptionsT): number => {
  const activeOptionIndex = options.findIndex((option) => {
    return option.isActive;
  });

  return activeOptionIndex;
};

export {
  useFindActiveOptionIndex,
  useGenerateFormBtns,
};