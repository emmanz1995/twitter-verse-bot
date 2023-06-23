class BibleApiMapper {
  static toBibleVerseReference(response: BibleVerseReferenceResponse): BibleVerseReference {
    return {
      reference: response.reference,
      verses: response.verses.map(scriptureDetail => {
          return {
            bookId: scriptureDetail.book_id,
            bookName: scriptureDetail.book_name,
            chapter: scriptureDetail.chapter,
            verse: scriptureDetail.verse,
            text: scriptureDetail.text
          };
        }
      )
    }
  }
}

export {
  BibleApiMapper
}