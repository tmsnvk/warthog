// react and eco.
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  SubmitHandler,
  UseFormSetError,
} from 'react-hook-form';
import { PgFormContext } from '@context/PgFormContext.context';
// component utilities.
import { roleOptions } from './AddNewUser.utilities';
// component services.
import { AddNewUser } from 'services/pg/user';
// component types.
import {
  AddNewUserErrorT,
  AddNewUserParameterT,
  AddNewUserReturnT,
} from '@custom-types/pg/api/user/User.types';

// ** useSubmitForm | custom hook ** //
// a custom hook to handle the 'AddNewUser' form submissions.
const useSubmitForm = (setError: UseFormSetError<AddNewUserParameterT>) => {
  // * custom context setup * //
  const { setAddNewUserQueryData } = useContext(PgFormContext);

  // * custom react-query useMutation setup * //
  const { mutate, reset } = useMutation({
    mutationKey: ['addNewUser'],
    mutationFn: async (parameters: AddNewUserParameterT): Promise<AddNewUserReturnT> => {
      const userLoginResponse = await AddNewUser.addUser(parameters);

      return userLoginResponse;
    },
    onSuccess: (data: AddNewUserReturnT): void => {
      setAddNewUserQueryData(data.data);
      reset();
    },
    onError: (error: AddNewUserErrorT): void => {
      setError('root.serverError', { type: error.response.status, message: error.response.data.message });
    },
  });

  // * form submission controller. * //
  const onSubmit: SubmitHandler<AddNewUserParameterT> = (formData: AddNewUserParameterT): void => {
    mutate(formData);
  };

  return {
    onSubmit,
  };
};

// ** useGenerateOptions | custom hook ** //
// a custom hook to generate the select option list located in the 'AddNewUser' form.
const useGenerateOptions = () => {
  const rolesOptions = roleOptions.map((option) => {
    return (
      <option key={option.label} value={option.value} hidden={option.value === ''}>{option.label}</option>
    );
  });

  return {
    rolesOptions,
  };
};

export {
  useSubmitForm,
  useGenerateOptions,
};
