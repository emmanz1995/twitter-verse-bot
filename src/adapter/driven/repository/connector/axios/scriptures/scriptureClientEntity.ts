import { AxiosAdapter } from 'axios';

interface ResponseObj {
  reference: String;
  verses: {
    book_id: String;
    book_name: String;
    chapter: String;
    verse: Number;
    text: String;
  }[];
  text: String;
  translation_name: String;
}

interface Client {
  response: ResponseObj;
  statusCode: Number;
}
