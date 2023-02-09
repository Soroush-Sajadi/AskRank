import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { options } from '../Mocks/options'

dotenv.config();
const router: Express = express();

router.get('/options/:lang', (req: Request , res: Response) => {
  const lang: string = req.params.lang
  res.json(options[lang]);
});

export default router