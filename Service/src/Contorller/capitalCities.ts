import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { getCapitalCitiesDataForRef } from '../ControllerUtils/capitalCitiesUtils' 

dotenv.config();
const router: Express = express();

router.get('/options/capitalCities/:ref', (req: Request , res: Response) => {
  const data = getCapitalCitiesDataForRef( req.params.ref)
  res.json(data)
});

export default router