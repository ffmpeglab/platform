import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FFMPEGLAB_PLATFORM_PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(FFMPEGLAB_PLATFORM_PORT);
}
bootstrap();
