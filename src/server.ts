import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorlogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`Database connected`);

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    errorlogger.error('failed to connect datase', error);
  }
  process.on('unhandledRejection', error => {
    console.log(
      'Unhandled Rejection is detected, we are closing our server ....'
    );
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

process.on('SIGTERM', () => {
  if (server) {
    logger.info('SIGTERM is received');
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
bootstrap();
