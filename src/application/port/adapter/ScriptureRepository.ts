import {
  ScriptureEntity,
  ScriptureIdentifierEntity
} from '../../../adapter/driven/repository/db/mongo/scriptures/scriptureEntity';

interface ScriptureRepository {
  saveAll(scriptures: ScriptureEntity[]): Promise<Boolean>
  getById(id: ScriptureIdentifierEntity): Promise<ScriptureEntity | null>
}

export default ScriptureRepository