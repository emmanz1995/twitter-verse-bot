import express, { Request, Response } from 'express';
import cors from 'cors';
import cron from 'cron';
// import { postNewTweets } from './lib/twitterVerse-bot';
// import { generateRandomBibleVerse } from './helpers/generateRandomBibleVerse';
import { scriptures } from './connectors/data';
import { generateRandomBibleVerse } from './helpers/generateRandomBibleVerse';

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const PORT: number = 5001;
const app = express();

app.use('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to the twitterVerse Bot</h1>');
});

app.use(cors());

// postNewTweets();

const schedule = new cron.CronJob(
  '* * * * * *',
  () => {
    console.log(generateRandomBibleVerse(scriptures));
  },
  null,
  true
);

schedule.start();

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
