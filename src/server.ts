import 'reflect-metadata';
import 'dotenv/config';
import './database';

import express, { json, NextFunction, Request, Response } from 'express';

import 'express-async-errors';

import { router } from './routes';

const app = express();

app.use(json());

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, _request: Request, response: Response, _Next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        statusCode: 400,
        message: err.message,
      });
    }

    return response.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  },
);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running in port ${port}`));
