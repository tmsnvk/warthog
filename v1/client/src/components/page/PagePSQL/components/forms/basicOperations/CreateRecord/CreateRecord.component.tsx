// react and eco.
import { useForm } from 'react-hook-form';
import {
  useGenerateOptions,
  useSubmitForm,
} from './CreateRecord.hooks';
// component elements.
import {
  ErrorMessage,
  Form,
  InputContainer,
  Label,
  SelectInput,
  SubmitContainer,
  SubmitInput,
  TextInput,
} from '@sharedComponents/form-related';
import { LoadingModal } from '@sharedComponents/modals';
import { LabelIcon } from '@sharedComponents/icon-styles';
import { FlexContainer } from './CreateRecord.styles';
// component utilities.
import { iconLibrary } from '@config';
// component types.
import { CreateRecordParameterT } from '@custom-types/pg/api/record/Record.types';

// ** CreateRecord | component ** //
// the component contains a form that serves the '/api/v1/pg/record/createRecord' endpoint.
// submitting the form creates a new record with the specified data in the application's psql database.
const CreateRecord = () => {
  // * react-hook-form setup * //
  const { formState: { isLoading, isSubmitting, errors }, handleSubmit, register, setError } = useForm<CreateRecordParameterT>({ mode: 'onSubmit' });

  // * custom hooks setup * //
  const { onSubmit } = useSubmitForm(setError);
  const { rolesOptions } = useGenerateOptions();

  return (
    <Form id={'createRecord'} method={'POST'} action={'/api/v1/pg/record/createRecord'} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <FlexContainer $direction={'row'}>
          <LabelIcon icon={iconLibrary.faEnvelope}></LabelIcon>
          <Label htmlFor={'recordEmail'} labelText={'Email'} />
        </FlexContainer>
        <TextInput
          id={'recordEmail'}
          {...register('recordEmail', {
            required: { value: true, message: 'Providing an email address is required.' },
            pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Enter a valid email.' },
          })}
          type={'text'}
          name={'recordEmail'}
          autoComplete={'off'}
          placeholder={'enter record email address'}
          $size={'normal'}
          $isError={errors.recordEmail?.message !== undefined}
          disabled={isSubmitting}
        />
        {(errors.recordEmail?.message) && (<ErrorMessage errorMessage={errors.recordEmail.message} />)}
      </InputContainer>
      <FlexContainer $direction={'row'}>
        <InputContainer>
          <FlexContainer $direction={'column'}>
            <FlexContainer $direction={'row'}>
              <LabelIcon icon={iconLibrary.faUser}></LabelIcon>
              <Label htmlFor={'recordFirstName'} labelText={'First name(s)'} />
            </FlexContainer>
            <TextInput
              id={'recordFirstName'}
              {...register('recordFirstName', {
                required: { value: true, message: 'Providing a first name is required.' },
                pattern: { value: /^[A-Za-z0-9-\s]+$/i, message: 'Use only letters and numbers.' },
              })}
              type={'text'}
              name={'recordFirstName'}
              autoComplete={'off'}
              placeholder={'enter record first name'}
              $size={'short'}
              $isError={errors.recordFirstName?.message !== undefined}
              disabled={isSubmitting}
            />
            {(errors.recordFirstName?.message) && (<ErrorMessage errorMessage={errors.recordFirstName.message} />)}
          </FlexContainer>
        </InputContainer>
        <InputContainer>
          <FlexContainer $direction={'column'}>
            <FlexContainer $direction={'row'}>
              <LabelIcon icon={iconLibrary.faUsers}></LabelIcon>
              <Label htmlFor={'recordLastName'} labelText={'Last name(s)'} />
            </FlexContainer>
            <TextInput
              id={'recordLastName'}
              {...register('recordLastName', {
                required: { value: true, message: 'Providing a first name is required.' },
                pattern: { value: /^[A-Za-z0-9-\s]+$/i, message: 'Use only letters and numbers.' },
              })}
              type={'text'}
              name={'recordLastName'}
              autoComplete={'off'}
              placeholder={'enter record last name'}
              $size={'short'}
              $isError={errors.recordLastName?.message !== undefined}
              disabled={isSubmitting}
            />
            {(errors.recordLastName?.message) && (<ErrorMessage errorMessage={errors.recordLastName.message} />)}
          </FlexContainer>
        </InputContainer>
      </FlexContainer>
      <InputContainer>
        <FlexContainer $direction={'column'}>
          <FlexContainer $direction={'row'}>
            <LabelIcon icon={iconLibrary.faAddressCard}></LabelIcon>
            <Label htmlFor={'recordRole'} labelText={'record role'} />
          </FlexContainer>
          <SelectInput
            id={'recordRole'}
            {...register('recordRole', {
              required: { value: true, message: 'Choosing a record category is required.' },
            })}
            name={'recordRole'}
            autoComplete={'off'}
            $size={'short'}
            $isError={errors.recordRole?.message !== undefined}
            disabled={isSubmitting}
          >
            {rolesOptions}
          </SelectInput>
          {(errors.recordRole?.message) && (<ErrorMessage errorMessage={errors.recordRole.message} />)}
        </FlexContainer>
      </InputContainer>
      <SubmitContainer>
        {(isSubmitting) ? (<LoadingModal loadingMessage={'Your request is being processed.'} />) : (<SubmitInput type={'submit'} value={'submit query'} disabled={isSubmitting || isLoading} />)}
        {(errors.root?.serverError) && (<ErrorMessage errorMessage={errors.root.serverError.message as string} />)}
      </SubmitContainer>
    </Form>
  );
};

export default CreateRecord;
