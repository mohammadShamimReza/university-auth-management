import express from 'express';
import { UserRouter } from '../modules/user/user.router';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
