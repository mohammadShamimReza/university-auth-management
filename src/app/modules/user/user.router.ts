import express from 'express'
import { UserControllar } from './user.controllar'

const router = express.Router()

router.post('/create-user', UserControllar.createUser)

export const UserRouter = router
