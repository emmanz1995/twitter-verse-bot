interface ScriptureClientRepository {
  getScriptureByVerse(verse: string): Promise<Client | null>;
}

export default ScriptureClientRepository;
