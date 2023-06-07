// react and eco.
import { useFindActiveOptionIndex } from '@pageComponents/PagePSQL/hooks';
import { useGenerateFormButtons } from './FormSelector.hooks';
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
  const { optionItems } = useGenerateFormButtons({ options, handleClick });
  const { activeOptionIndex } = useFindActiveOptionIndex(options);

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
