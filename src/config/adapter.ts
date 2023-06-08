import testController from '../adapter/driver/api/TestController';
import ScriptureRepositoryImpl from '../adapter/driven/repository/db/mongo/scriptures/ScriptureRepositoryImpl';
import {
  ScriptureEntity,
  scriptureEntityModel
} from '../adapter/driven/repository/db/mongo/scriptures/scriptureEntity';
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import ScriptureRepository from '../application/port/adapter/ScriptureRepository';

const scriptureRepository: ScriptureRepository = new ScriptureRepositoryImpl(
  mongoose.model<ScriptureEntity>(
    'scripture',
    new Schema(scriptureEntityModel)
  )
)

export { testController, scriptureRepository };
