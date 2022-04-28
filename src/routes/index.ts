import express from 'express';
const router = express.Router()

/* Index Route */
router.get('/', (req, res, next) => {
  res.send('Index Page')
})

export default router