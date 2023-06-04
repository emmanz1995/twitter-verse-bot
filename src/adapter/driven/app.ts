import express, { Request, Response } from 'express';

const application = (app: express.Application) => {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const PORT: number = 8080;

  // const app = express();

  app.use('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the twitterVerse Bot</h1>');
  });

  // app.use(cors());

  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });
};

export default application;
