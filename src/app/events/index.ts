import initAcademicDepartmentEvents from '../modules/academicDepartment/academicDepartment.events';
import initAcademicFacultyEvents from '../modules/academicFaculty/academicFaculty.events';
import initAcademicSemesterEvent from '../modules/academicSemester/academicSemester.event';

const subscribeToEvent = () => {
  initAcademicSemesterEvent();
  initAcademicDepartmentEvents();
  initAcademicFacultyEvents();
};

export default subscribeToEvent;
