// react and eco.
import {
  useFindActiveOptionIndex,
  useHandleFormDisplay,
} from './PagePSQL.hooks';
// component elements.
import {
  AddNewUserData,
  FormContainer,
  FormSelector,
  PageContainer,
  VisualiseDataContainer,
} from '@pageComponents/PostgreSQL';

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
      <VisualiseDataContainer>
        <AddNewUserData />
      </VisualiseDataContainer>
    </PageContainer>
  );
};

export default PagePSQL;
