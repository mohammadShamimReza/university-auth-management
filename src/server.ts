import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger'

// qoh9rsSFGX66UyDx;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connected`)

    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('failed to connect datase', error)
  }
}

bootstrap()
