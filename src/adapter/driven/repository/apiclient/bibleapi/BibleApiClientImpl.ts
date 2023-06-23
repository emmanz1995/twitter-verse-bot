import { GET, BasePath, Path, BaseService, Response} from "ts-retrofit";
import { BibleApiClient } from '../../../../../application/port/adapter/BibleApiClient';

@BasePath("")
class BibleApiClientImpl extends BaseService implements BibleApiClient{
  @GET("/{book-chapter}")
  async getScriptures(@Path("book-chapter") bookChapter: String): Promise<Response<BibleVerseReferenceResponse>> { return <Response<BibleVerseReferenceResponse>> {} };
}

export {
  BibleApiClientImpl
}