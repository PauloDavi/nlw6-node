/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { CustomExceptions } from '../exceptions/CustomExceptions';

function exceptionsHandle(
  error: CustomExceptions,
  _request: Request,
  response: Response,
  _Next: NextFunction,
) {
  console.error(error);

  if (error instanceof Error) {
    return response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
    });
  }

  return response.status(500).json({
    statusCode: 500,
    message: 'Internal server error',
  });
}

export { exceptionsHandle };
