import { Model } from 'mongoose';

export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcedemicSemesterTitles = 'Autumn' | 'Fall' | 'Summer';
export type IAcademicSemesterCodes = '01' | '02' | '03';

export type IAcademicSemester = {
  title: IAcedemicSemesterTitles;
  year: string;
  code: IAcademicSemesterCodes;
  startMonth: IAcademicSemesterMonths;
  endMonth: IAcademicSemesterMonths;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
export type IAcademicSemesterFilter = {
  searchTerm?: string;
};
