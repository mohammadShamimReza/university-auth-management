import { RedisClient } from '../../../shared/redis';
import {
  EVENT_ACADEMIC_SEMESTER_CREATED,
  EVENT_ACADEMIC_SEMESTER_UPDATED,
} from './academicSemester.constant';
import { IAcademicSemesterCreatedEvent } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const initAcademicSemesterEvent = async () => {
  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
    const data: IAcademicSemesterCreatedEvent = JSON.parse(e);
    await AcademicSemesterService.createSemesterFromEvent(data);
  });
  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_UPDATED, async (e: string) => {
    const data: IAcademicSemesterCreatedEvent = JSON.parse(e);
    await AcademicSemesterService.updateOneIntoDBFromEvent(data);
    console.log(data);
  });
};

export default initAcademicSemesterEvent;
