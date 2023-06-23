import ScriptureClientRepository from '../../../../../../application/port/adapter/ScriptureClientRepository';
import { IScriptureClientModel } from './scriptureClientEntity';

class ScriptureClientRepositoryImpl implements ScriptureClientRepository {
  private readonly api: IScriptureClientModel;
  public constructor(api: IScriptureClientModel) {
    this.api = api;
  }
  async getScriptureByVerse(verse: string): Promise<Client | null> {
    const scriptureClientEntity = await this.api({
      method: 'GET',
      url: `https://bible-api.com/${verse}`,
    });
    return scriptureClientEntity;
  }
}

export default ScriptureClientRepositoryImpl;
