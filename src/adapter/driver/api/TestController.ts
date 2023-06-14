import express, { Request, Response } from 'express';

const testController = (app: express.Application): void => {
  app.use('/', async (req: Request, res: Response) => {
    // const router = express.Router();
    // router.post('/', (req: Request, res: Response) => {
    const text = 'Welcome to the twitterVerse Bot 🚀';
    setTimeout(() => {
      console.log(`${text}`);
    }, 5000);

    res.status(202).send({});
  });
  // })
};

export default testController;
