import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService, HealthService, TweetService } from './app.service';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import { CreateTweetDTO } from './dtos/CreateTweetDTO';
import { IsInt } from 'class-validator';

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

@Controller("tweets")
export class TweetController {
  constructor(private readonly appService: TweetService) { }

  @Post()
  createTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body);
  };

  @Get()
  getLatestTweets(@Query('page') page: string) {
    return this.appService.getLatestTweets(page);
  };
  @Get(':username')
  getTweetsByUsername(@Param('username') username: string){
    return this.appService.getTweetsByUsername(username);
  }
}
