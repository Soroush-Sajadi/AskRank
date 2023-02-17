import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { getCountriesDataForRef } from '../ControllerUtils/countriesUtils' 

dotenv.config();
const router: Express = express();

router.get('/options/countries/:ref', (req: Request , res: Response) => {
  const data = getCountriesDataForRef( req.params.ref)
  res.json(data)
});

export default router