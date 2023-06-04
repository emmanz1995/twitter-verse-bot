import { scriptures, IScriptures } from '../../connectors/data';

export const generateRandomBibleVerse = (scripture: IScriptures[]) => {
  const bibleVerse = [];

  const randomNumber = Math.floor(Math.random() * 50 + 1);

  if (randomNumber < 25) {
    const randomIndex = Math.floor(Math.random() * scripture.length);
    bibleVerse.push(scripture[randomIndex]);
  }

  if (bibleVerse === null) {
    return scriptures[0];
  }
  return bibleVerse;
};
