import { Response } from 'ts-retrofit';

interface BibleApiClient {
  getScriptures(bookChapter: String): Promise<Response<BibleVerseReferenceResponse>>;
}

export { BibleApiClient };
