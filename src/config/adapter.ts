import { VerseSchedulerImpl } from '../adapter/driver/scheduler/VerseSchedulerImpl';
import { VerseScheduler } from '../application/port/adapter/VerseScheduler';
import testController from '../adapter/driver/api/TestController';

const verseScheduler: VerseScheduler = new VerseSchedulerImpl()

export {
  verseScheduler,
  testController
}