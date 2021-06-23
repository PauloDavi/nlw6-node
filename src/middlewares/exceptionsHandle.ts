/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { CustomException } from '../exceptions/CustomException';

function exceptionsHandle(
  error: CustomException,
  _request: Request,
  response: Response,
  _Next: NextFunction,
) {
  console.error(error);

  if (error instanceof Error) {
    return response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      ...(error.data ? error.data : {}),
    });
  }

  return response.status(500).json({
    statusCode: 500,
    message: 'Internal server error',
  });
}

export { exceptionsHandle };
