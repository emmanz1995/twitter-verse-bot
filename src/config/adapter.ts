import { SyncScriptureSchedulerImpl } from '../adapter/driver/scheduler/SyncScriptureSchedulerImpl';
import { BibleApiClientImpl } from '../adapter/driven/repository/apiclient/bibleapi/BibleApiClientImpl';
import { SyncScriptureScheduler } from '../application/port/adapter/SyncScriptureScheduler';
import testController from '../adapter/driver/api/TestController';
import syncScriptureController from '../adapter/driver/api/SyncScriptureController';
import { BibleApiClient } from '../application/port/adapter/BibleApiClient';
import { BibleRepository } from '../application/port/adapter/BibleRepository';
import { BibleRepositoryImpl } from '../adapter/driven/repository/apiclient/bibleapi/BibleRepositoryImpl';
import {
  ScriptureRepositoryImpl
} from '../adapter/driven/repository/db/mongo/bibleverse/ScriptureRepositoryImpl';
import { ScriptureRepository } from '../application/port/adapter/ScriptureRepository';
import { ScriptureEntity, scriptureEntityModel } from '../adapter/driven/repository/db/mongo/bibleverse/ScriptureMongoEntity';
import mongoose, { Schema } from 'mongoose';
import { SyncScriptureUsecaseImpl } from '../application/usecase/SyncScriptureUsecaseImpl';
import { ServiceBuilder } from 'ts-retrofit';
import { BibleStatisticRepository } from '../application/port/adapter/BibleStatisticRepository';
import { BibleStatisticRepositoryImpl } from '../adapter/driven/repository/dataprovider/BibleStatisticRepositoryImpl';
import { SyncScriptureUsecase } from '../application/port/usecase/SyncScriptureUsecase';

const bibleApiClient: BibleApiClient = new ServiceBuilder()
  .setEndpoint("https://bible-api.com")
  .setTimeout(300000)
  .build(BibleApiClientImpl);

const bibleRepository: BibleRepository = new BibleRepositoryImpl(
  bibleApiClient
);

const bibleStatisticRepository: BibleStatisticRepository = new BibleStatisticRepositoryImpl();

const scriptureRepository: ScriptureRepository = new ScriptureRepositoryImpl(
  mongoose.model<ScriptureEntity>(
    'scripture',
    new Schema(scriptureEntityModel)
  )
)

const syncScriptureUsecase: SyncScriptureUsecase = new SyncScriptureUsecaseImpl(scriptureRepository, bibleRepository, bibleStatisticRepository)

const syncScriptureScheduler: SyncScriptureScheduler = new SyncScriptureSchedulerImpl(syncScriptureUsecase);

export { syncScriptureScheduler, testController, syncScriptureController, syncScriptureUsecase, bibleRepository, bibleStatisticRepository };
