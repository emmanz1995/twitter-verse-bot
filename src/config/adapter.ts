import testController from '../adapter/driver/api/TestController';
import ScriptureRepositoryImpl from '../adapter/driven/repository/db/mongo/scriptures/ScriptureRepositoryImpl';
import {
  ScriptureEntity,
  scriptureEntityModel,
} from '../adapter/driven/repository/db/mongo/scriptures/scriptureEntity';
import { Schema, model } from 'mongoose';
import ScriptureRepository from '../application/port/adapter/ScriptureRepository';

const scriptureRepository: ScriptureRepository = new ScriptureRepositoryImpl(
  model<ScriptureEntity>('scripture', new Schema(scriptureEntityModel))
);

export { testController, scriptureRepository };
