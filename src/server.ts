import 'reflect-metadata';
import 'dotenv/config';
import './database';

import express, { json } from 'express';

import { router } from './routes';

const app = express();

app.use(json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running in port ${port}`));
