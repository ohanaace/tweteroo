import { Injectable, UnauthorizedException } from '@nestjs/common';
import User from './entities/users-entities';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import Tweet from './entities/tweets-entities';
import { CreateTweetDTO } from './dtos/CreateTweetDTO';

@Injectable()
export class HealthService {
  getHello(): string {
    return "I'm okay!";
  }
}

@Injectable()
export class AppService {
  private users: User[] = [];

  createUser(userDTO: CreateUserDTO) {
    const user = new User(userDTO.username, userDTO.avatar)
    this.users.push(user);
    return user;
  }

  getUsernames(){
    return this.users;
  }
}

@Injectable()
export class TweetService {
  private tweets: Tweet[] = [];
  constructor(private readonly appService: AppService) {}
  createTweet(tweetDTO: CreateTweetDTO) {
  const authorizedUser = this.appService.getUsernames()?.find(user => user._username === tweetDTO.username)
    console.log(authorizedUser);
   if(!authorizedUser) {
    throw new UnauthorizedException();
   }
   const newTweet = new Tweet(tweetDTO.username, tweetDTO.tweet)
   this.tweets.push(newTweet);
    return newTweet;
  }
}