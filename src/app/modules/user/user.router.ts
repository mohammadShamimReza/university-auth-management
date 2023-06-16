import express from 'express';
import { UserControllar } from './user.controllar';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(UserValidation.createdUserZodSchema),
  UserControllar.createStudent
);

export const UserRouter = router;
