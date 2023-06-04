import startup from './adapter/driven/express';
import cron from 'cron';
import { scriptures } from './connectors/data';
import { generateRandomBibleVerse } from './application/helpers/generateRandomBibleVerse';

// TODO: Sort out all the existing folders into they respective folders based on the clean architure definition given by Anoj.

startup;

// postNewTweets();

// const schedule = new cron.CronJob(
//   '* * * * * *',
//   () => {
//     console.log(generateRandomBibleVerse(scriptures));
//   },
//   null,
//   true
// );

// schedule.start();
