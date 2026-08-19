import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FFMPEGLAB_PLATFORM_PORT } from './config';
import session from 'express-session';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('FFmpeglab')
    .setDescription('FFmpeglab Platform API')
    .setVersion('1.0')
    .setExternalDoc('supabase', 'https://ffmpeglab.com/supabase.yaml')
    .addTag('ffmpeglab')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const document = documentFactory();
  const externalSpecPath = path.join(__dirname, '../supabase.yml');
  const externalSpec: any = yaml.load(
    fs.readFileSync(externalSpecPath, 'utf8'),
  );

  // 3. Inject the external types/schemas into your local spec
  if (externalSpec.components && externalSpec.components.schemas) {
    document.components = document.components || {};
    document.components.schemas = {
      ...document.components.schemas,
      ...externalSpec.components.schemas, // Merges external types
    };
  }

  SwaggerModule.setup('api', app, document);
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
