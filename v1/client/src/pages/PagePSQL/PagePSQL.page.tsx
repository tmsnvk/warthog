// react and eco.
import {
  useFindActiveOptionIndex,
  useHandleFormDisplay,
} from '@pageComponents/PagePSQL/hooks';
// component elements.
import {
  AddNewUserData,
  FormContainer,
  FormSelector,
  PageContainer,
  VisualiseDataContainer,
} from '@pageComponents/PagePSQL/components';

// ** PostgreSQL | page ** //
//
const PagePSQL = () => {
  const { options, handleClick } = useHandleFormDisplay();
  const activeFormIndex = useFindActiveOptionIndex(options);

  return (
    <PageContainer>
      <FormSelector handleClick={handleClick} options={options} />
      <FormContainer>
        {options[activeFormIndex].formComponent}
      </FormContainer>
      <VisualiseDataContainer as={'section'}>
        <AddNewUserData />
      </VisualiseDataContainer>
    </PageContainer>
  );
};

export default PagePSQL;