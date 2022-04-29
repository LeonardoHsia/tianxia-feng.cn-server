import express, {Request, Response} from 'express';
const router = express.Router()

/* User Route */
router.get(['/', '/list'], (req: Request, res: Response, next) => {
  res.send('User List Page')
})

router.get('/:id', (req: Request, res: Response, next) => {
  res.send(`UserId ${req.params.id}`)
})
export default router