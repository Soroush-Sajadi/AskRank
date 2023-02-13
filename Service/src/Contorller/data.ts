import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router: Express = express();

router.get('/options/data/:primeryOption/:secondaryOption', (req: Request , res: Response) => {
  const primeryOption: string = req.params.primeryOption
  const secondaryOption: string = req.params.secondaryOption
  res.json(primeryOption)
});

export default router