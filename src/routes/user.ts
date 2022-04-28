import express from 'express';
const router = express.Router()

/* Index Route */
router.get('/user', (req, res, next) => {
  res.send('User Page')
})

export default router