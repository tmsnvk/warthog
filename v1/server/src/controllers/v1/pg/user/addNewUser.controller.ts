// express and eco.
import {
  NextFunction,
  Request,
  Response,
} from 'express';
import { v4 as uuidv4 } from 'uuid';
// service imports.
import { userService } from '@services/v1/pg/student';
// controller models.
import {
  AddNewUserReturnType,
} from '@custom-types/pg/user.types';

// ** addNewUserController | contoller function ** //
//
const addNewUserController = async (request: Request, response: Response<any>, next: NextFunction): Promise<void> => {
  const { email, firstName, lastName, userRole } = request.body;

  try {
    if (!email || !firstName || !lastName || !userRole) {
      throw new Error('The form submission was incorrect. Fill in and submit the form again.');
    }

    const userId: string = uuidv4();
    const serviceResponse: AddNewUserReturnType = await userService.addNew(email, firstName, lastName, userRole, userId);

    if (!serviceResponse) {
      throw new Error('A user with this email address is already added to the database.');
    }

    response.status(200).send(serviceResponse);
  } catch (error: unknown) {
    next(error);
  }
};

export default addNewUserController;
