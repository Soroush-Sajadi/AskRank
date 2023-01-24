import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router: Express = express();
const port:string = process.env.DEV_PORT

router.get('/', (req: Request , res: Response) => {
  res.send('Payload router node express');
});

router.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default router