import cron from 'cron';
import { VerseScheduler } from '../../../application/port/adapter/VerseScheduler';

class VerseSchedulerImpl implements VerseScheduler {
  constructor() {}

  public start(): void {
    const schedule = new cron.CronJob(
      '*/10 * * * * *',
      async () => {
        const randomVerse: string = 'Random Verse Every 10 Seconds';
        console.log(randomVerse);
      },
      null,
      true
    );

    schedule.start();
  }
}

export { VerseSchedulerImpl };
