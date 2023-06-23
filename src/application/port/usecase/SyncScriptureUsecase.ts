
interface SyncScriptureUsecase {
  invoke(): Promise<void>
  processVerses(book: String, chapter: number): Promise<void>
}

export { SyncScriptureUsecase };
