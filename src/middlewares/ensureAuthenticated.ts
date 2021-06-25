import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { CustomException } from '../exceptions/CustomException';

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new CustomException('Token not provided', 401);
  }

  const token = authToken.split(' ')[1];

  const { sub } = verify(token, process.env.JWT_SECRET);

  request.user_id = sub as string;

  return next();
}

export { ensureAuthenticated };
