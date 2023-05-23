import {
  AddNewUser,
  FormContainer,
  PageContainer,
} from '@pageComponents/PostgreSQL';

// ** PostgreSQL | page ** //
//
const PostgreSQL = () => {
  return (
    <PageContainer>
      <FormContainer>
        <AddNewUser />
      </FormContainer>
    </PageContainer>
  );
};

export default PostgreSQL;
