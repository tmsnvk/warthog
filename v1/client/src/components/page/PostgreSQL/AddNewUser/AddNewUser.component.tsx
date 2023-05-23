// react and eco.
import { useForm } from 'react-hook-form';
import { useSubmitForm } from './AddNewUser.hooks';
// component elements.
import {
  ErrorMessage,
  Form,
  InputField,
  Label,
} from '@sharedComponents/form-related';
import { LabelIcon } from '@sharedComponents/icon-styles';
import { LoadingModal } from '@sharedComponents/modals';
import { FlexContainer } from './AddNewUser.styles';
// component utilities.
import { iconLibrary } from '@config';
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
    <Form method={'POST'} action={'/api/v1/pg/user/addNew'} id={'addNewUser'} onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer $direction={'row'}>
        <LabelIcon icon={iconLibrary.faEnvelope}></LabelIcon>
        <Label htmlFor={'userEmail'} labelText={'Email'} />
      </FlexContainer>
      <InputField
        {...register('userEmail', {
          required: { value: true, message: 'Fill in the field.' },
        })}
        type={'text'}
        id={'userEmail'}
        name={'userEmail'}
        autoComplete={'off'}
        placeholder={'enter user email address'}
        $size={'normal'}
        disabled={isSubmitting}
      />
      {(errors.userEmail?.message) && (<ErrorMessage errorMessage={errors.userEmail.message} />)}
      <FlexContainer $direction={'row'}>
        <FlexContainer $direction={'column'}>
          <FlexContainer $direction={'row'}>
            <LabelIcon icon={iconLibrary.faUser}></LabelIcon>
            <Label htmlFor={'firstName'} labelText={'First name'} />
          </FlexContainer>
          <InputField
            {...register('firstName', {
              required: { value: true, message: 'Fill in the field.' },
            })}
            type={'text'}
            id={'firstName'}
            name={'firstName'}
            autoComplete={'off'}
            placeholder={'enter user first name'}
            $size={'short'}
            disabled={isSubmitting}
          />
          {(errors.firstName?.message) && (<ErrorMessage errorMessage={errors.firstName.message} />)}
        </FlexContainer>
        <FlexContainer $direction={'column'}>
          <FlexContainer $direction={'row'}>
            <LabelIcon icon={iconLibrary.faUsers}></LabelIcon>
            <Label htmlFor={'lastname'} labelText={'Last name'} />
          </FlexContainer>
          <InputField
            {...register('lastName', {
              required: { value: true, message: 'Fill in the field.' },
            })}
            type={'text'}
            id={'lastName'}
            name={'lastName'}
            autoComplete={'off'}
            placeholder={'enter user last name'}
            $size={'short'}
            disabled={isSubmitting}
          />
          {(errors.lastName?.message) && (<ErrorMessage errorMessage={errors.lastName.message} />)}
        </FlexContainer>
      </FlexContainer>
      {(isSubmitting) ? (<LoadingModal loadingMessage={'Wait.'} />) : (<input type={'submit'} value={'add new user'} />)}
    </Form >
  );
};

export default AddNewUser;
