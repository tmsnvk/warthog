// react and eco.
import { useForm } from 'react-hook-form';
import { useSubmitForm } from './AddNewUser.hooks';
// component elements.
import {
  ErrorMessage,
  FormContainer,
  InputField,
  Label,
} from '@sharedComponents/form-related';
import { LoadingModal } from '@sharedComponents/modals';
import { ComponentContainer } from './AddNewUser.styles';
// component types.
import { AddNewUserParameterType } from '@custom-types/pg/api/user/User.types';

// ** AddNewUser | component ** //
//
const AddNewUser = () => {
  // * react-hook-form setup * //
  const { formState: { isSubmitting, errors }, handleSubmit, register, setError } = useForm<AddNewUserParameterType>({ mode: 'onSubmit' });

  // * custom hooks setup * //
  const { onSubmit } = useSubmitForm(setError);

  return (
    <ComponentContainer>
      <FormContainer method={'POST'} action={'/api/v1/pg/user/addNew'} id={'addNewUser'} onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor={'userEmail'} labelText={'Email'} />
        <InputField
          {...register('userEmail', {
            required: { value: true, message: 'Fill in the field.' },
          })}
          type={'text'}
          id={'userEmail'}
          name={'userEmail'}
          autoComplete={'off'}
          disabled={isSubmitting}
        />
        {(errors.userEmail?.message) && (<ErrorMessage errorMessage={errors.userEmail.message} />)}
        <Label htmlFor={'firstName'} labelText={'First name'} />
        <InputField
          {...register('firstName', {
            required: { value: true, message: 'Fill in the field.' },
          })}
          type={'text'}
          id={'firstName'}
          name={'firstName'}
          autoComplete={'off'}
          disabled={isSubmitting}
        />
        {(errors.firstName?.message) && (<ErrorMessage errorMessage={errors.firstName.message} />)}
        <Label htmlFor={'lastName'} labelText={'Last name'} />
        <InputField
          {...register('lastName', {
            required: { value: true, message: 'Fill in the field.' },
          })}
          type={'text'}
          id={'lastName'}
          name={'lastName'}
          autoComplete={'off'}
          disabled={isSubmitting}
        />
        {(errors.lastName?.message) && (<ErrorMessage errorMessage={errors.lastName.message} />)}
        {(isSubmitting) ? (<LoadingModal loadingMessage={'Wait.'} />) : (<input type={'submit'} value={'add new user'} />)}
      </FormContainer>
    </ComponentContainer>
  );
};

export default AddNewUser;
