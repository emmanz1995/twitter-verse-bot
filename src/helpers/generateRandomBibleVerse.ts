import { scriptures } from '../connectors/data';

export const generateRandomBibleVerse = (scripture: string[]) => {
  const bibleVerse = Math.floor(Math.random() * scripture.length);
  return scriptures[bibleVerse];
};
