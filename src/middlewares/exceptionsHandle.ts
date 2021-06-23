/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';

import { CustomException } from '../exceptions/CustomException';

function exceptionsHandle(
  error: CustomException | ValidationError | SyntaxError,
  _request: Request,
  response: Response,
  _Next: NextFunction,
) {
  console.error(error);

  if (error instanceof CustomException) {
    return response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      ...(error.data ? error.data : {}),
    });
  }

  if (error instanceof ValidationError) {
    return response.status(400).json({
      statusCode: 400,
      ...error,
    });
  }

  if (error instanceof SyntaxError) {
    return response.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }

  return response.status(500).json({
    statusCode: 500,
    message: 'Internal server error',
  });
}

export { exceptionsHandle };
