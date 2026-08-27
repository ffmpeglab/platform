import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login.controller';
import { GitlabLoginController } from './gitlab.controller';
import { GithubLoginController } from './github.controller';
import { PipelineController } from './pipeline.controller';
import { PipelineService } from './pipeline.service';
import { WebhookController } from './webhook.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    LoginController,
    GitlabLoginController,
    GithubLoginController,
    PipelineController,
    WebhookController,
  ],
  providers: [AppService, PipelineService],
})
export class AppModule {}
