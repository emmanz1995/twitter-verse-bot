import express, { Express } from 'express';
import configureCors from './config/cors';
import {
  syncScriptureController,
  syncScriptureUsecase,
  testController
} from './config/adapter';
import { Database } from './config/mongo';

const app: Express = express();
const PORT: number = 5001;

// Rest of your server configuration and routes
configureCors(app);
testController(app);
syncScriptureController(app, syncScriptureUsecase);
Database.getInstance();
// syncScriptureScheduler.start();

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
