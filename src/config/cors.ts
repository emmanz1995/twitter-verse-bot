import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const configureCors = (app: express.Application): void => {
  app.use(cors());

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
};

export default configureCors;