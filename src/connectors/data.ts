import { uuid } from 'uuidv4';

export interface IScriptures {
  id: string;
  verse: string;
  scriptureVerse: string;
}

export const scriptures: IScriptures[] = [
  {
    id: uuid(),
    verse: 'John 3v16',
    scriptureVerse:
      'For God so loved the world, he gave his only begotten son that whosoever believes in him would not perish but have everlasting life.',
  },
  {
    id: uuid(),
    verse: 'Genesis 1v1',
    scriptureVerse:
      'In the beginning God created the heavens and the earth and darkness covered the face of the earth.',
  },
  {
    id: uuid(),
    verse: 'John 1v1',
    scriptureVerse:
      'In the beginning was the word, and the word was with God, and the word was God.',
  },
  {
    id: uuid(),
    verse: 'Isiah 53v4',
    scriptureVerse:
      'Surely He has borne our griefs And carried our sorrows; Yet we esteemed Him stricken, Smitten by God, and afflicted.',
  },
  {
    id: uuid(),
    verse: 'Psalm 23v6',
    scriptureVerse:
      'Surely goodness and mercy shall follow me All the days of my life; And I will dwell in the house of the LORD Forever.',
  },
  {
    id: uuid(),
    verse: 'Romans 12v2',
    scriptureVerse:
      'And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.',
  },
  {
    id: uuid(),
    verse: 'John 6v65',
    scriptureVerse:
      'And He said, “Therefore I have said to you that no one can come to Me unless it has been granted to him by My Father.”',
  },
  {
    id: uuid(),
    verse: 'Matthew 19v26',
    scriptureVerse:
      'But Jesus looked at them and said to them, “With men this is impossible, but with God all things are possible.”',
  },
  {
    id: uuid(),
    verse: 'Isiah 53v5',
    scriptureVerse:
      'But He was wounded for our transgressions, He was bruised for our iniquities; The chastisement for our peace was upon Him, And by His stripes we are healed.',
  },
  {
    id: uuid(),
    verse: 'Galatians 3v13',
    scriptureVerse:
      'Christ has redeemed us from the curse of the law, having become a curse for us (for it is written, “Cursed is everyone who hangs on a tree” ),',
  },
];

// export const scriptures2: string[] = [
//   'For God so loved the world, he gave his only begotten son that whosoever believes in him would not perish but have everlasting life.',
//   'In the beginning God created the heavens and the earth and darkness covered the face of the earth.',
//   'In the beginning was the word, and the word was with God, and the word was God.',
//   'Surely He has borne our griefs And carried our sorrows; Yet we esteemed Him stricken, Smitten by God, and afflicted.',
//   'Surely goodness and mercy shall follow me All the days of my life; And I will dwell in the house of the LORD Forever.',
//   'And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.',
//   'And He said, “Therefore I have said to you that no one can come to Me unless it has been granted to him by My Father.”',
//   'But Jesus looked at them and said to them, “With men this is impossible, but with God all things are possible.”',
//   'But He was wounded for our transgressions, He was bruised for our iniquities; The chastisement for our peace was upon Him, And by His stripes we are healed.',
//   'Christ has redeemed us from the curse of the law, having become a curse for us (for it is written, “Cursed is everyone who hangs on a tree”',
// ];
