import { scriptures, IScriptures } from '../connectors/data';
// import _ from 'lodash';

export const generateRandomBibleVerse = (scripture: IScriptures[]) => {
  let bibleVerse = [];

  const randomNumber = Math.floor(Math.random() * 50 + 1);

  if (randomNumber < 25) {
    let randomIndex = Math.floor(Math.random() * scripture.length);
    bibleVerse.push(scripture[randomIndex]);
  }

  if (typeof bibleVerse === null) {
    return scriptures[0];
  }
  // const verse = _.get(scriptures[0], 'verse');
  // const scriptureVerse = _.get(scriptures[0], 'scriptureVerse');

  return bibleVerse;
};
