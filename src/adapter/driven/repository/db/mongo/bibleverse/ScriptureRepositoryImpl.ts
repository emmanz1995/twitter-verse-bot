import {
  ScriptureEntity,
  IScriptureModel
} from './ScriptureMongoEntity';
import { ScriptureRepository } from '../../../../../../application/port/adapter/ScriptureRepository';
import { Scripture, ScriptureIdentifier } from '../../../../../../domain/model/Scripture';
import { ScriptureMongoMapper } from './mapper/ScriptureMongoMapper';

class ScriptureRepositoryImpl implements ScriptureRepository {

  private readonly bibleVerseModel: IScriptureModel;

  constructor(bibleVerseModel: IScriptureModel) {
    this.bibleVerseModel = bibleVerseModel;
  }

  public async save(scriptures: Scripture[]): Promise<Boolean> {
    const scriptureBulkOps = scriptures
      .map((scripture: Scripture) => ScriptureMongoMapper.toBibleVerseEntity(scripture))
      .map((entity: ScriptureEntity) => ({
          updateOne: {
            filter: { _id: entity._id },
            update: entity,
            upsert: true
          }
        })
      );

    const bibleVerseBulkWriteResults = await this.bibleVerseModel.bulkWrite(scriptureBulkOps);

    return bibleVerseBulkWriteResults.isOk();
  }

  public async findById(id: ScriptureIdentifier): Promise<Scripture | null> {
    const bibleVerseEntity = await this.bibleVerseModel.findById(ScriptureMongoMapper.toBibleVerseIdentifierEntity(id));
    return bibleVerseEntity ? ScriptureMongoMapper.toBibleVerse(bibleVerseEntity) : null;
  }
}

export {
  ScriptureRepositoryImpl
};