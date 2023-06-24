// express and eco.
import {
  NextFunction,
  Request,
  Response,
} from 'express';
import { v4 as uuidv4 } from 'uuid';
// service imports.
import { basicOperations } from '@services/v1/pg/record';
// controller models.
import {
  CreateRecordReturnT,
} from '@custom-types/pg/user.types';

// ** createRecordController | contoller function ** //
//
const createRecordController = async (request: Request, response: Response<any>, next: NextFunction): Promise<void> => {
  const { email, firstName, lastName, role } = request.body;

  try {
    if (!email || !firstName || !lastName || !role) {
      throw new Error('The form submission was incorrect. Fill in and submit the form again.');
    }

    const id: string = uuidv4();
    const serviceResponse: CreateRecordReturnT = await basicOperations.createRecord({ email, firstName, lastName, role, id });

    if (!serviceResponse) {
      throw new Error('A user with this email address is already created in the database.');
    }

    response.status(200).send(serviceResponse);
  } catch (error: unknown) {
    next(error);
  }
};

export default createRecordController;
