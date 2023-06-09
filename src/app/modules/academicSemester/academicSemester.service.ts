import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
// import { IPaginationOptions } from '../../../interfaces/pagination';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester code');
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

// const getAllSemesters = (paginationOptions: IPaginationOptions) => {};

export const AcademicSemesterService = {
  createSemester,
  // getAllSemesters,
};
