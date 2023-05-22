// express and eco.
import {
  Request,
  Response,
} from 'express';
import { v4 as uuidv4 } from 'uuid';
// service imports.
import { userService } from '@services/v1/pg/student';
// controller models.
import {
  AddNewUserReturnType,
} from '@custom-types/pg/users.types';

// ** studentGetAllController | contoller function ** //
//
const addNewStudentController = async (request: Request, response: Response<any>): Promise<void> => {
  const { email, firstName, lastName } = request.body;

  try {
    const userId: string = uuidv4();
    const serviceResponse: AddNewUserReturnType | undefined = await userService.addNew(email, firstName, lastName, userId);

    response.status(200).send(serviceResponse);
  } catch (error: unknown) {
    console.error(error);
  }
};

export default addNewStudentController;
