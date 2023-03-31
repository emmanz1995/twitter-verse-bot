import twit from 'twit';
import config from '../config';
// import { generateRandomBibleVerse } from '../helpers/generateRandomBibleVerse';
// import { scriptures } from '../connectors/data';
import { TwitterApi } from 'twitter-api-v2';

const twitter = new TwitterApi({
  appKey: config.consumer_key,
  appSecret: config.consumer_secret,
  accessToken: config.access_token,
  accessSecret: config.access_token_secret,
});

const bearerToken = new TwitterApi(`${config.bearer_token}`);

const client = twitter.readWrite;
const readOnlyClient = bearerToken.readOnly;

// function getAllTweets() {}
async function postNewTweets() {
  await client.v2.tweet(
    'In the beginning was the word, and the word was with God, and the word was God.'
  );
  // console.log(tweet);
}

export { postNewTweets };
