import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login.controller';
import { ServiceController } from './service.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
