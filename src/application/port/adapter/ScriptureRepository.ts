import {
  ScriptureEntity,
  ScriptureIdentifierEntity,
} from '../../../adapter/driven/repository/db/mongo/scriptures/scriptureEntity';

interface ScriptureRepository {
  saveAll(scriptures: Scripture[]): Promise<Boolean>;
  getById(id: ScriptureIdentifier): Promise<Scripture | null>;
}

export default ScriptureRepository;
