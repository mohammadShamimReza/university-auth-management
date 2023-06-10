import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterControllar } from './academicSemester.controllar';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterControllar.createSemester
);

router.get('/:id', AcademicSemesterControllar.getSingleSemester);

router.get('/', AcademicSemesterControllar.getAllSemesters);

export const AcademicSemesterRoutes = router;
