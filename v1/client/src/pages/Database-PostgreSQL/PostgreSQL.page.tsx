import {
  AddNewUserData,
  AddNewUserForm,
  FormContainer,
  PageContainer,
  VisualiseDataContainer,
} from '@pageComponents/PostgreSQL';

// ** PostgreSQL | page ** //
//
const PostgreSQL = () => {
  return (
    <PageContainer>
      <FormContainer>
        <AddNewUserForm />
      </FormContainer>
      <VisualiseDataContainer>
        <AddNewUserData />
      </VisualiseDataContainer>
    </PageContainer>
  );
};

export default PostgreSQL;
