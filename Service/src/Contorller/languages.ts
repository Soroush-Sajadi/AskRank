import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { languages } from '../Mocks/languages'

dotenv.config();
const router: Express = express();

router.get('/languages', (req: Request , res: Response) => {
  res.json(languages);
});

export default router