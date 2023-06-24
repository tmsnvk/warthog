// react and eco.
import {
  useFindActiveOptionIndex,
  useHandleFormDisplay,
} from '@pageComponents/PagePSQL/hooks';
// component elements.
import {
  FormContainer,
  FormSelector,
  PageContainer,
  QueryReturnData,
  VisualiseDataContainer,
} from '@pageComponents/PagePSQL/components';

// ** PagePSQL | page ** //
//
const PagePSQL = () => {
  const { options, handleClick } = useHandleFormDisplay();
  const { activeOptionIndex } = useFindActiveOptionIndex(options);

  return (
    <PageContainer>
      <FormSelector handleClick={handleClick} options={options} />
      <FormContainer>
        {options[activeOptionIndex].formComponent}
      </FormContainer>
      <VisualiseDataContainer as={'section'}>
        <QueryReturnData />
      </VisualiseDataContainer>
    </PageContainer>
  );
};

export default PagePSQL;
