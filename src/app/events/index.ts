import initAcademicDepartmentEvents from '../modules/academicDepartment/academicDepartment.events';
import initAcademicSemesterEvent from '../modules/academicSemester/academicSemester.event';

const subscribeToEvent = () => {
  initAcademicSemesterEvent();
  initAcademicDepartmentEvents();
};

export default subscribeToEvent;
