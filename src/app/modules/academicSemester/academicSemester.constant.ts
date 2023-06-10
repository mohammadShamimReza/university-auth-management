import {
  IAcademicSemesterCodes,
  IAcedemicSemesterTitles,
} from './academicSemester.interface';
import { IAcademicSemesterMonths } from './academicSemester.interface';

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const acedemicSemesterTitles: IAcedemicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const acedemicSemesterCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterSearchableFields = ['title', 'code', 'year'];

export const academicSemesterFilterableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
];
