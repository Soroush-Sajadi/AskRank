import { Application } from 'express';
import express, { Express, Request, Response } from 'express';
import router from './Contorller/router'
import population from './Contorller/population'
const app: Application = express();
const port:string = process.env.DEV_PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(router);
app.use(population)
