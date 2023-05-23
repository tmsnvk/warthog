// react and eco.
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
  SubmitHandler,
  UseFormSetError,
} from 'react-hook-form';
import { AddNewUser } from 'services/pg/user';
// component types.
import {
  AddNewUserErrorType,
  AddNewUserParameterType,
  AddNewUserReturnType,
} from '@custom-types/pg/api/user/User.types';

// ** useSubmitForm | custom hook ** //
// a custom hook to handle the login form submissions.
const useSubmitForm = (setError: UseFormSetError<AddNewUserParameterType>): { onSubmit: SubmitHandler<AddNewUserParameterType> } => {
  // * custom react-query useMutation setup * //
  const { mutate, reset } = useMutation({
    mutationKey: ['addNewUser'],
    mutationFn: async (parameters: AddNewUserParameterType): Promise<AddNewUserReturnType> => {
      const userLoginResponse = await AddNewUser.addUser(parameters);

      return userLoginResponse;
    },
    onSuccess: (data: AddNewUserReturnType): void => {
      reset();
    },
    onError: (error: AddNewUserErrorType): void => {
      setError('userEmail', { type: 'server', message: error.response.data });
    },
  });

  // * form submission controller. * //
  const onSubmit: SubmitHandler<AddNewUserParameterType> = (formData: AddNewUserParameterType): void => {
    mutate(formData);
  };

  return {
    onSubmit,
  };
};

export {
  useSubmitForm,
};
