import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FFMPEGLAB_PLATFORM_PORT } from './config';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('FFmpeglab')
    .setDescription('FFmpeglab Platform API')
    .setVersion('1.0')
    .addTag('ffmpeglab')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
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
