import { ScriptureEntity, ScriptureIdentifierEntity } from '../scriptureEntity';

class ScriptureMongoMapper {
  static toScripture(scriptureEntity: ScriptureEntity): Scripture {
    return {
      id: {
        bookName: scriptureEntity._id.bookName,
        verse: scriptureEntity._id.verse,
        chapter: scriptureEntity._id.chapter,
      },
      text: scriptureEntity.text,
    };
  }

  static toScriptureEntity(scripture: Scripture): ScriptureEntity {
    return {
      _id: {
        bookName: scripture.id.bookName,
        chapter: scripture.id.chapter,
        verse: scripture.id.verse,
      },
      text: scripture.text,
    };
  }

  static toScriptureIdentifierEntity(
    identifier: ScriptureIdentifier
  ): ScriptureIdentifierEntity {
    return {
      bookName: identifier.bookName,
      chapter: identifier.chapter,
      verse: identifier.verse,
    };
  }
}

export { ScriptureMongoMapper };
