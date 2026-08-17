import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallbackController } from './callback.controller';

@Module({
  imports: [],
  controllers: [AppController, CallbackController],
  providers: [AppService],
})
export class AppModule {}
