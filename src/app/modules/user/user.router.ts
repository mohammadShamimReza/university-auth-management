import express from 'express';
import { UserControllar } from './user.controllar';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createdUserZodSchema),
  UserControllar.createUser
);

export const UserRouter = router;
