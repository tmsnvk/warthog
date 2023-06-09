// express and eco.
import {
  NextFunction,
  Request,
  Response,
} from 'express';

const ErrorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
  const errorStatus = error.statusCode || 500;
  const errorMessage = error.message || 'Something went wrong';

  response.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
};

export default ErrorHandler;
