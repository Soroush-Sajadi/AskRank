import { Application } from 'express';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import router from './Contorller/router'
import population from './Contorller/population'
import languages  from './Contorller/languages';
import options from './Contorller/options'
const app: Application = express();
const port:string = process.env.DEV_PORT
app.use(cors());
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(router);
app.use(population)
app.use(languages)
app.use(options)
