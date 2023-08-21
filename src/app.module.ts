import { Module } from '@nestjs/common';
import { AppController, HealthController, TweetController } from './app.controller';
import { AppService, HealthService, TweetService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HealthController, TweetController],
  providers: [AppService, HealthService, TweetService],
})
export class AppModule {}
