import { Application } from 'express';
import express, { Express, Request, Response } from 'express';
import router from './Contorller/router'
const app: Application = express();
app.use(router);
