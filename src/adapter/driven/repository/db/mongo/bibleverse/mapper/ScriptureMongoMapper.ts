import { ScriptureEntity, ScriptureIdentifierEntity } from '../ScriptureMongoEntity';
import { Scripture, ScriptureIdentifier } from '../../../../../../../domain/model/Scripture';

class ScriptureMongoMapper {
  static toBibleVerse(verseEntity: ScriptureEntity): Scripture {
    return {
      id: verseEntity._id,
      text: verseEntity.text
    }
  }

  static toBibleVerseIdentifierEntity(verseEntity: ScriptureIdentifier): ScriptureIdentifierEntity {
    return {
      verse: verseEntity.verse,
      chapter: verseEntity.chapter,
      bookName: verseEntity.bookName,
    }
  }

  static toBibleVerseEntity(bibleVerse: Scripture): ScriptureEntity {
    return {
      _id: bibleVerse.id,
      text: bibleVerse.text
    }
  }
}

export {
  ScriptureMongoMapper
}