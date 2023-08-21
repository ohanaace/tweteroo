import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService, HealthService, TweetService } from './app.service';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import { CreateTweetDTO } from './dtos/CreateTweetDTO';

@Controller()
export class HealthController {
  constructor(private readonly appService: HealthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("sign-up")
  @HttpCode(HttpStatus.OK)
  createUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }
}

@Controller()
export class TweetController {
  constructor(private readonly appService: TweetService) { }

  @Post("tweets")
  createTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body);
  }

  @Get("tweets")
  getLatestTweets() {
    return this.appService.getLatestTweets();
  }
}
