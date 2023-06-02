import { VerseSchedulerImpl } from '../adapter/driver/scheduler/VerseSchedulerImpl';
import { VerseScheduler } from '../adapter/driver/scheduler/VerseScheduler';
import testController from '../adapter/driver/api/TestController';

const verseScheduler: VerseScheduler = new VerseSchedulerImpl()

export {
  verseScheduler,
  testController
}