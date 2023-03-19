import express, { Request, Response } from 'express';
import cors from 'cors';
import cronJob from 'cron';
// import { postNewTweets } from './lib/twitterVerse-bot';

const PORT = 5001;
const app = express();

app.use('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to the twitterVerse Bot</h1>');
});

app.use(cors());

// postNewTweets();

const schedule = new cronJob.CronJob(
  '* * * * * *',
  () => {
    console.log('Helllooo there!');
  },
  null,
  true
);

schedule.start();

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT as number}`);
});
