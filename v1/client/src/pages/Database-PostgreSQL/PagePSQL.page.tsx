// react and eco.
import { useHandleFormDisplay } from './PagePSQL.hooks';
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
  const { handleClick, options } = useHandleFormDisplay();

  const activeFormIndex = options.findIndex((option) => {
    return option.isActive;
  });

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
