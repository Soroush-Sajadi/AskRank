import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { population } from '../Mocks/population'
dotenv.config();
const router: Express = express();

router.get('/population', (req: Request , res: Response) => {
  res.json(population);
});

export default router