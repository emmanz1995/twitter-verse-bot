import { Scripture } from '../Scripture';

class ScriptureMapper {
  static toDomain(verse: BibleVerse): Scripture {
    return {
      id: {
        bookName: verse.bookName,
        chapter: verse.chapter,
        verse: verse.verse
      },
      text: verse.text
    }
  }
}

export { ScriptureMapper }