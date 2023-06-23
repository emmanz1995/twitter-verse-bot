interface BibleVerseReference {
  reference: string;
  verses: BibleVerse[]
}

interface BibleVerse {
  bookId: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
}