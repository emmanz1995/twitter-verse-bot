
interface BibleRepository {
  getVerses(book: String, chapter: number): Promise<BibleVerseReference>;
}

export { BibleRepository };
