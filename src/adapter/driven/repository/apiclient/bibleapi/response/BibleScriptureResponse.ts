interface BibleVerseReferenceResponse {
  reference: string;
  verses: BibleVerseResponse[]
}

interface BibleVerseResponse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}