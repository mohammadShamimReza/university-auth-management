import express from 'express'
import userControllar from './user.controllar'

const router = express.Router()

router.post('/crete-user', userControllar.creteUser)

export default router
