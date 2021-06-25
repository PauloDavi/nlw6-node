import 'reflect-metadata';
import 'dotenv/config';
import './database';

import compression from 'compression';
import cors from 'cors';
import { cleanEnv } from 'envalid';
import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import 'express-async-errors';

import { envValidation } from './envValidation';
import { exceptionsHandle } from './middlewares/exceptionsHandle';
import { router } from './routes';

const env = cleanEnv(process.env, envValidation);

const app = express();

app.use(json());
app.use(morgan(env.isDevelopment ? 'dev' : 'short'));
app.use(cors());
app.use(compression());
app.use(helmet());

app.use(router);

app.use(exceptionsHandle);

app.listen(env.PORT, () =>
  console.log(`server is running in port ${env.PORT}`),
);
