import express, { Express } from 'express';
import configureCors from './config/cors';
import { testController } from './config/adapter';
import MongoDB from './config/mongo';

const app: Express = express();
const PORT: number = 5001;

// Rest of your server configuration and routes
configureCors(app);
testController(app);

MongoDB.getInstance();

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
