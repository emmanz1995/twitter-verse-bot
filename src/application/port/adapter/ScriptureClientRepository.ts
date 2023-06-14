interface ScriptureClientRepository {
  getScriptureByVerse(verse: string): Promise<string | null>;
}

export default ScriptureClientRepository;
