import cron from 'cron';
import { SyncScriptureScheduler } from '../../../application/port/adapter/SyncScriptureScheduler';
import { SyncScriptureUsecase } from '../../../application/port/usecase/SyncScriptureUsecase';

class SyncScriptureSchedulerImpl implements SyncScriptureScheduler {
  private readonly syncScriptureUsecase: SyncScriptureUsecase
  constructor(syncScriptureUsecase: SyncScriptureUsecase) {
    this.syncScriptureUsecase = syncScriptureUsecase
  }

  public start(): void {
    const cronExpression = '* * * * *';
    const schedule = new cron.CronJob(
      cronExpression,
      async () => {
        schedule.stop();
        // console.log("Syncing Scriptures");
        // await this.syncScriptureUsecase.invoke();
      },
      null,
      true,
      'utc'
    );

    schedule.start();
  }
}

export { SyncScriptureSchedulerImpl };
