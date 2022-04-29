import express, {Request, Response} from 'express';
const router = express.Router()

/* Index Route */
router.get(['/', '/index'], (req: Request, res: Response, next) => {
  res.send('Index Page')
})

export default router