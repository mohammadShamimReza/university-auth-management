import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globlErrorHandler from './app/middlewares/globalErrorHandler';

import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

app.use(globlErrorHandler);

// handle not found routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: {
      path: req.path,
      message: 'API NOT FOUND',
    },
  });
  next();
});

export default app;
