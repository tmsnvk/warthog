// react and eco.
import { useFindActiveOptionIndex } from '@pageComponents/PagePSQL/hooks';
import { useGenerateFormButtons } from './FormSelector.hooks';
// component elements.
import {
  ButtonDescription,
  DescriptionContainer,
  SectionContainer,
} from './FormSelector.styles';
// component types.
import { FormSelectorT } from './FormSelector.types';

// ** FormSelector | component ** //
//
const FormSelector = ({ options, handleClick }: FormSelectorT) => {
  const { operationButtons } = useGenerateFormButtons({ options, handleClick });
  const { activeOptionIndex } = useFindActiveOptionIndex(options);

  return (
    <SectionContainer>
      {operationButtons}
      <DescriptionContainer>
        <ButtonDescription $isActive={options[activeOptionIndex].isActive}>{options[activeOptionIndex].buttonDescription}</ButtonDescription>
      </DescriptionContainer>
    </SectionContainer>
  );
};

export default FormSelector;
