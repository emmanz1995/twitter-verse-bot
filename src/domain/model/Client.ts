enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

interface ResponseObj {
  reference: String;
  verses: {
    book_id: String;
    book_name: String;
    chapter: String;
    verse: Number;
    text?: String;
  }[];
  text: String;
  translation_name?: String;
}

interface Client {
  data: ResponseObj;
  status: StatusCode;
}

export default Client;
