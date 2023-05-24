// service config.
import { axiosConfig } from '@config';
// component types.
import {
  AddNewUserParameterType,
  AddNewUserReturnType,
} from '@custom-types/pg/api/user/User.types';

// ** AddNewUser | service object ** //
//
const AddNewUser = {
  addUser(formData: AddNewUserParameterType): Promise<AddNewUserReturnType> {
    return axiosConfig.request({
      method: 'POST',
      url: '/api/v1/pg/user/addNew',
      data: {
        email: formData.userEmail,
        firstName: formData.firstName,
        lastName: formData.lastName,
        userRole: formData.userRole,
      },
    });
  },
};

export default AddNewUser;
