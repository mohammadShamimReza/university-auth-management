import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import {
  academicSemesterMonths,
  acedemicSemesterCodes,
  acedemicSemesterTitles,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';

const academicSemesterScehma = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: acedemicSemesterTitles },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: acedemicSemesterCodes },
    startMonth: { type: String, required: true, enum: academicSemesterMonths },
    endMonth: { type: String, required: true, enum: academicSemesterMonths },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

academicSemesterScehma.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist!'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterScehma
);
