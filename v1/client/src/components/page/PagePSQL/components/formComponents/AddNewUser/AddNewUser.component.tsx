// react and eco.
import { useForm } from 'react-hook-form';
import {
  useGenerateOptions,
  useSubmitForm,
} from './AddNewUser.hooks';
// component elements.
import {
  ErrorMessage,
  Form,
  InputContainer,
  Label,
  SelectInput,
  SubmitInput,
  TextInput,
} from '@sharedComponents/form-related';
import { LoadingModal } from '@sharedComponents/modals';
import { LabelIcon } from '@sharedComponents/icon-styles';
import { FlexContainer } from './AddNewUser.styles';
// component utilities.
import { iconLibrary } from '@config';
// component types.
import { AddNewUserParameterT } from '@custom-types/pg/api/user/User.types';

// ** AddNewUser | component ** //
// the component contains a form that serves the '/api/v1/pg/user/addNew' endpoint.
// submitting the form creates a new user with the specified data in the PSQL database.
const AddNewUser = () => {
  // * react-hook-form setup * //
  const { formState: { isSubmitting, errors }, handleSubmit, register, setError } = useForm<AddNewUserParameterT>({ mode: 'onSubmit' });

  // * custom hooks setup * //
  const { onSubmit } = useSubmitForm(setError);
  const { rolesOptions } = useGenerateOptions();

  return (
    <Form id={'addNewUser'} method={'POST'} action={'/api/v1/pg/user/addNew'} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <FlexContainer $direction={'row'}>
          <LabelIcon icon={iconLibrary.faEnvelope}></LabelIcon>
          <Label htmlFor={'userEmail'} labelText={'Email'} />
        </FlexContainer>
        <TextInput
          id={'userEmail'}
          {...register('userEmail', {
            required: { value: true, message: 'Providing an email address is required.' },
            pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Enter a valid email.' },
          })}
          type={'text'}
          name={'userEmail'}
          autoComplete={'off'}
          placeholder={'enter user email address'}
          $size={'normal'}
          $isError={errors.userEmail?.message !== undefined}
          disabled={isSubmitting}
        />
        {(errors.userEmail?.message) && (<ErrorMessage errorMessage={errors.userEmail.message} />)}
      </InputContainer>
      <FlexContainer $direction={'row'}>
        <InputContainer>
          <FlexContainer $direction={'column'}>
            <FlexContainer $direction={'row'}>
              <LabelIcon icon={iconLibrary.faUser}></LabelIcon>
              <Label htmlFor={'firstName'} labelText={'First name(s)'} />
            </FlexContainer>
            <TextInput
              id={'firstName'}
              {...register('firstName', {
                required: { value: true, message: 'Providing a first name is required.' },
                pattern: { value: /^[A-Za-z0-9-\s]+$/i, message: 'Use only letters and numbers.' },
              })}
              type={'text'}
              name={'firstName'}
              autoComplete={'off'}
              placeholder={'enter user first name'}
              $size={'short'}
              $isError={errors.firstName?.message !== undefined}
              disabled={isSubmitting}
            />
            {(errors.firstName?.message) && (<ErrorMessage errorMessage={errors.firstName.message} />)}
          </FlexContainer>
        </InputContainer>
        <InputContainer>
          <FlexContainer $direction={'column'}>
            <FlexContainer $direction={'row'}>
              <LabelIcon icon={iconLibrary.faUsers}></LabelIcon>
              <Label htmlFor={'lastname'} labelText={'Last name(s)'} />
            </FlexContainer>
            <TextInput
              id={'lastName'}
              {...register('lastName', {
                required: { value: true, message: 'Providing a first name is required.' },
                pattern: { value: /^[A-Za-z0-9-\s]+$/i, message: 'Use only letters and numbers.' },
              })}
              type={'text'}
              name={'lastName'}
              autoComplete={'off'}
              placeholder={'enter user last name'}
              $size={'short'}
              $isError={errors.firstName?.message !== undefined}
              disabled={isSubmitting}
            />
            {(errors.lastName?.message) && (<ErrorMessage errorMessage={errors.lastName.message} />)}
          </FlexContainer>
        </InputContainer>
      </FlexContainer>
      <InputContainer>
        <FlexContainer $direction={'column'}>
          <FlexContainer $direction={'row'}>
            <LabelIcon icon={iconLibrary.faAddressCard}></LabelIcon>
            <Label htmlFor={'userRole'} labelText={'User role'} />
          </FlexContainer>
          <SelectInput
            id={'userRole'}
            {...register('userRole', {
              required: { value: true, message: 'Choosing a user category is required.' },
            })}
            name={'userRole'}
            autoComplete={'off'}
            $size={'short'}
            $isError={errors.userRole?.message !== undefined}
            disabled={isSubmitting}
          >
            {rolesOptions}
          </SelectInput>
          {(errors.userRole?.message) && (<ErrorMessage errorMessage={errors.userRole.message} />)}
        </FlexContainer>
      </InputContainer>
      {(isSubmitting) ? (<LoadingModal loadingMessage={'Your request is being processed.'} />) : (<SubmitInput type={'submit'} value={'submit query'} disabled={isSubmitting} />)}
    </Form>
  );
};

export default AddNewUser;
