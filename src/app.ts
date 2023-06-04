import express, { Express } from 'express';
import configureCors from './config/cors';
import { verseScheduler, testController } from './config/adapter';

const app: Express = express();
const PORT = 5001;

// Rest of your server configuration and routes
configureCors(app);
testController(app);

verseScheduler.start();

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
