import { Scripture, ScriptureIdentifier } from '../../../domain/model/Scripture';

interface ScriptureRepository {
  save(scriptures: Scripture[]): Promise<Boolean>
  findById(id: ScriptureIdentifier): Promise<Scripture | null>
}

export { ScriptureRepository };
