import { ClientEntity } from '../scriptureClientEntity';

class ScriptureAxiosMapper {
  static toApiClient(client: ClientEntity): Client {
    return {
      data: {
        reference: client.data.reference,
        verses: {
          book_id: client.data.verses.book_id,
          book_name: client.data.verses.book_name,
          chapter: client.data.verses.chapter,
          verse: client.data.verses.verse,
          text: client.data.verses.text,
        },
        translation_name: client.data.translation_name,
      },
      status: client.statusCode,
    };
  }

  static toApiClientEntity(client: Client): ClientEntity {
    return {
      data: {
        reference: client.data.reference,
        verses: {
          book_id: client.data.verses.book_id,
          book_name: client.data.verses.book_name,
          chapter: client.data.verses.chapter,
          verse: client.data.verses.verse,
          text: client.data.verses.text,
        },
        translation_name: client.data.translation_name,
      },
      statusCode: client.status,
    };
  }
}
