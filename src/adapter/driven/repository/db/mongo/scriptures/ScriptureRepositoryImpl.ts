import { IScriptureModel, ScriptureEntity, ScriptureIdentifierEntity } from './scriptureEntity';
import ScriptureRepository from '../../../../../../application/port/adapter/ScriptureRepository';

class ScriptureRepositoryImpl implements ScriptureRepository {
  private readonly scripture: IScriptureModel;
  public constructor(scripture: IScriptureModel) {
    this.scripture = scripture
  }

  public async saveAll(scriptures: ScriptureEntity[]): Promise<Boolean> {
   const bulkops = scriptures.map(scripture => (
      {
        updateOne: {
          filter: { _id: scripture._id },
          update: scripture,
          upsert: true
        }
      }
    ))
    const bulkWrite = await this.scripture.bulkWrite(bulkops)

    return bulkWrite.isOk()
  }

  public async getById(id: ScriptureIdentifierEntity): Promise<ScriptureEntity | null> {
    return this.scripture.findById(id)
  }
}

export default ScriptureRepositoryImpl;