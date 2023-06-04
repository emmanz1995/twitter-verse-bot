# BibleVerse Bot

## Description

Twitter Verse Bot, to tweet Bible verses every Sunday Morning at 8:30am. The bible verses will be fetched from a Bible api using feign.js and will be stored in a MongoDB database and from there a Bible verse will be picked at random from the db and using the cron job scheduler will be twittered at the respective time set.

## Running the Bible Verse Bot

First you would need to run

```
npm i
```

or

```
npm install
```

<br />
### Running bot in development mode

After that you can then run the bot using

```
npm run dev
```

This will start the project in development mode<br /><br />

### Running bot in production mode

You can start the project in production mode using

```
npm run start
```

## Building project

Once you have made your changes because we are using typescript your changes will not be picked up in the browser so you will need to build the bot every time you have introduced a new change to bot in order for your changes to be reflected so use this command to do that

```
npm run build
```

## Running tests

To run your unit tests run this command

```
npm run test
```

### Env vars detail

Here are a list of details of the application environments that you would need to have available in the bot if you want the bot to run correctly. Most of the env vars will come from the twitter api you just need to set up a twitter developer access account and get all the different env vars that they will provide you with.
[Twitter api](https://developer.twitter.com/en)

| Name                | Description                                                    | Value                    |
| ------------------- | -------------------------------------------------------------- | ------------------------ |
| consumer_key        | This is your consumer key twitter api provides you with        | Your consumer key        |
| consumer_secret     | This is your consumer secret twitter api provides you with     | your consumer secret     |
| access_token        | This is your access token twitter api provides you with        | your access token        |
| access_token_secret | This is your access token secret twitter api provides you with | your access token secret |
| bearer_token        | This is your bearer token twitter api provides you with        | bearer token             |

Written By Emmanuel and Anoj

Thanks for reading 🎉
