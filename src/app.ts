import express, { Application } from 'express';
import cors from 'cors';
import globlErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRouter } from './app/modules/user/user.router';
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

app.use('/api/v1/user/', UserRouter);

// app.get('/', async (req , res, next) => {
//   throw new Error('Testing Error Logger')
// })

// Global error handler

app.use(globlErrorHandler);

export default app;
