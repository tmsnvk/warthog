// react and eco.
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  SubmitHandler,
  UseFormSetError,
} from 'react-hook-form';
import { PgFormContext } from '@context/PgFormContext.context';
// component utilities.
import { roleOptions } from './CreateRecord.utilities';
// component services.
import { basicOperations } from '@servicesPSQL/record';
// component types.
import {
  CreateRecordErrorT,
  CreateRecordParameterT,
  CreateRecordReturnT,
} from '@custom-types/pg/api/record/Record.types';

// ** useSubmitForm | custom hook ** //
// a custom hook to handle the 'CreateRecord' form submissions.
const useSubmitForm = (setError: UseFormSetError<CreateRecordParameterT>) => {
  // * custom context setup * //
  const { setTableVisualisation, setQueryVisualisation } = useContext(PgFormContext);

  // * custom react-query useMutation setup * //
  const { mutate, reset } = useMutation({
    mutationKey: ['createRecord'],
    mutationFn: async (parameters: CreateRecordParameterT): Promise<CreateRecordReturnT> => {
      const response = await basicOperations.createRecord(parameters);

      return response;
    },
    onSuccess: (data: CreateRecordReturnT): void => {
      setTableVisualisation(data.data.tableVisualisation);
      setQueryVisualisation(data.data.queryVisualisation);
      reset();
    },
    onError: (error: CreateRecordErrorT): void => {
      setError('root.serverError', { type: error.response.status, message: error.response.data.message });
    },
  });

  // * form submission controller. * //
  const onSubmit: SubmitHandler<CreateRecordParameterT> = (formData: CreateRecordParameterT): void => {
    mutate(formData);
  };

  return {
    onSubmit,
  };
};

// ** useGenerateOptions | custom hook ** //
// a custom hook to generate the select option list located in the 'CreateRecord' form.
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
