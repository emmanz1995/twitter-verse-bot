import { scriptures, IScriptures } from '../connectors/data';

export const generateRandomBibleVerse = (scripture: IScriptures[]) => {
  // const bibleVerse = Math.floor(Math.random() * scripture.length);
  // return scriptures[bibleVerse];
  let bibleVerse = [];

  const randomNumber = Math.floor(Math.random() * 50 + 1);

  if (randomNumber < 25) {
    let randomIndex = Math.floor(Math.random() * scripture.length);
    bibleVerse.push(scripture[randomIndex]);
  }

  if (typeof bibleVerse === null) {
    return scriptures[0];
  }

  return bibleVerse;
};
