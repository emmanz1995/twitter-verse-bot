enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

interface ResponseObj {
  reference: String;
  translation_name?: String | undefined;
  verses: {
    chapter: String;
    book_id: String;
    verse: Number;
    text?: String | undefined;
    book_name: String;
  };
  text: String;
}

interface Client {
  data: ResponseObj;
  status: Number;
}
