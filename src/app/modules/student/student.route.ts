import express from 'express';
import { StudentControllar } from './student.controllar';
import { StudentValidation } from './student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/:id', StudentControllar.getSingleStudent);
router.get('/', StudentControllar.getAllStudent);
router.delete('/:id', StudentControllar.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentControllar.updateStudent
);

export const StudentRouters = router;
