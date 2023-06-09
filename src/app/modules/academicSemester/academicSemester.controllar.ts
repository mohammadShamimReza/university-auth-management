import { NextFunction, Request, Response } from 'express';

import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOptions = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   soryBy: req.query.soryBy,
    //   sortOrder: req.query.sortOrder,
    // };
    // const result = await AcademicSemesterService.getAllSemesters(
    //   paginationOptions
    // );
    // sendResponse<IAcademicSemester>(res, {
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   message: 'Semesters retrieved successfully!',
    //   data: result,
    // });
    next();
  }
);

export const AcademicSemesterControllar = {
  createSemester,
  getAllSemesters,
};
