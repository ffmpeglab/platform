import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FFMPEGLAB_PLATFORM_PORT } from './config';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: process.env.COOKIE_SECRET as string,
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(FFMPEGLAB_PLATFORM_PORT);
}
bootstrap();
