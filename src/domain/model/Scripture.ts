interface ScriptureIdentifier {
  bookName: String;
  chapter: Number;
  verse: Number;
}

interface Scripture {
  id: ScriptureIdentifier;
  text: string;
}
