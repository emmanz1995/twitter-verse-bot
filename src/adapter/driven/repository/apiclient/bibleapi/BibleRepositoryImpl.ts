import { BibleApiClient } from '../../../../../application/port/adapter/BibleApiClient';
import { BibleRepository } from '../../../../../application/port/adapter/BibleRepository';
import { backOff } from "exponential-backoff";
import { BibleApiMapper } from './mapper/BibleApiMapper';


class BibleRepositoryImpl implements BibleRepository {
  private readonly bibleApiClient: BibleApiClient;

  constructor(bibleApiClient: BibleApiClient) {
    this.bibleApiClient = bibleApiClient;
  }

  async getVerses(book: String, chapter: number): Promise<BibleVerseReference> {
    let attempt = 0;
    try {
      const response = await backOff(
        async () => {
          attempt++;
          console.log(`Book: ${book} - Chapter: ${chapter} - Attempt No. ${attempt}`);
          return await this.bibleApiClient.getScriptures(`${book}%20${chapter}`)
        },
        {
          delayFirstAttempt: true,
          startingDelay: 10000,
          timeMultiple: 3,
          numOfAttempts: 10,
        }
        );
      return BibleApiMapper.toBibleVerseReference(response.data)
    } catch (e) {
      console.log("Failed to get Scriptures for book: ", book, " chapter: ", chapter)
      throw e
    }
  }
}

export {
  BibleRepositoryImpl
};