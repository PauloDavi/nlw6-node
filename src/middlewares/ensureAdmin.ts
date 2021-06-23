import { NextFunction, Request, Response } from 'express';

import { CustomException } from '../exceptions/CustomException';

function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const admin = true;

  if (!admin) {
    throw new CustomException('User is unauthorized', 401);
  }

  return next();
}

export { ensureAdmin };
