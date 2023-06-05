// react and eco.
import {
  useFindActiveOptionIndex,
  useGenerateFormBtns,
} from './FormSelector.hooks';
// component elements.
import {
  ButtonContainer,
  ButtonDescription,
  DescriptionContainer,
  SectionContainer,
} from './FormSelector.styles';
// component types.
import { FormSelectorT } from './FormSelector.types';

// ** FormSelector | component ** //
//
const FormSelector = ({ options, handleClick }: FormSelectorT) => {
  const optionItems = useGenerateFormBtns({ options, handleClick });
  const activeOptionIndex = useFindActiveOptionIndex(options);

  return (
    <SectionContainer>
      <ButtonContainer>
        {optionItems}
      </ButtonContainer>
      <DescriptionContainer>
        <ButtonDescription $isActive={options[activeOptionIndex].isActive}>{options[activeOptionIndex].btnDesc}</ButtonDescription>
      </DescriptionContainer>
    </SectionContainer>
  );
};

export default FormSelector;