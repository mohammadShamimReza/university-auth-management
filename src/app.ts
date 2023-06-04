import express, { Application } from 'express'
import cors from 'cors'
import UserRouter from './app/modules/users/user.router'
import globlErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/user/', UserRouter)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError('Not implemented')
//   // next('THis is error for next')
// })

// Global error handler

app.use(globlErrorHandler)

export default app
