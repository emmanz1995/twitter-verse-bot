import {
  IScriptureModel,
  ScriptureEntity,
  ScriptureIdentifierEntity,
} from './scriptureEntity';
import ScriptureRepository from '../../../../../../application/port/adapter/ScriptureRepository';
import { ScriptureMongoMapper } from './mapper/ScriptureMongoMapper';

class ScriptureRepositoryImpl implements ScriptureRepository {
  private readonly scriptureModel: IScriptureModel;
  public constructor(scriptureModel: IScriptureModel) {
    this.scriptureModel = scriptureModel;
  }

  public async saveAll(scriptures: Scripture[]): Promise<Boolean> {
    const bulkOps = scriptures
      .map(scripture => ScriptureMongoMapper.toScriptureEntity(scripture))
      .map(entity => ({
      updateOne: {
        filter: { _id: entity._id },
        update: entity,
        upsert: true,
      },
    }));
    const bulkWrite = await this.scriptureModel.bulkWrite(bulkOps);

    return bulkWrite.isOk();
  }

  public async getById(
    id: ScriptureIdentifier
  ): Promise<Scripture | null> {
    const scriptureEntity = await this.scriptureModel.findById(ScriptureMongoMapper.toScriptureIdentifierEntity(id));
    return scriptureEntity ? ScriptureMongoMapper.toScripture(scriptureEntity) : null;
  }
}

export default ScriptureRepositoryImpl;
