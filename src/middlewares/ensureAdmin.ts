import { NextFunction, Request, Response } from 'express';

import { CustomExceptions } from '../exceptions/CustomExceptions';

function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const admin = true;

  if (!admin) {
    throw new CustomExceptions('User is unauthorized', 401);
  }

  return next();
}

export { ensureAdmin };
