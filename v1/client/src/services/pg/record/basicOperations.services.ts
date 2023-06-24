// service config.
import { axiosConfig } from '@config';
// component types.
import {
  CreateRecordParameterT,
  CreateRecordReturnT,
} from '@custom-types/pg/api/record/Record.types';

// ** BasicOperations | service object ** //
//
const basicOperations = {
  createRecord(formData: CreateRecordParameterT): Promise<CreateRecordReturnT> {
    return axiosConfig.request({
      method: 'POST',
      url: '/api/v1/pg/record/createRecord',
      data: {
        email: formData.recordEmail,
        firstName: formData.recordFirstName,
        lastName: formData.recordLastName,
        role: formData.recordRole,
      },
    });
  },
};

export default basicOperations;
