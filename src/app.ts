import express, { Application } from 'express';
import cors from 'cors';
import globlErrorHandler from './app/middlewares/globalErrorHandler';

import routes from './app/routes';
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

app.use(globlErrorHandler);

export default app;
