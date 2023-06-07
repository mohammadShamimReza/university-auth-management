import express from 'express';
// import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  // UserControllar.createUser
);

export const UserRouter = router;
