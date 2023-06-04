import express from 'express';
import application from './app';

const app = express();

const startup = application(app);

export default startup;
