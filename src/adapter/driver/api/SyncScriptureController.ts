import express, { Request, Response } from 'express';
import { SyncScriptureUsecase } from '../../../application/port/usecase/SyncScriptureUsecase';

// @ts-ignore
const syncScriptureController = (app: express.Application, usecase: SyncScriptureUsecase): void => {
  app.post('/scriptures-sync', (req: Request, res: Response) => {
    console.log("Syncing Scriptures VIA Endpoint");
    res.sendStatus(202).end();

    usecase.invoke().then(() => {
      console.log("Completed Syncing Scriptures VIA Endpoint");
    }).catch((error) => {
      console.error("Error occurred during syncing Scriptures VIA Endpoint", error);
    });
  });
};

export default syncScriptureController;