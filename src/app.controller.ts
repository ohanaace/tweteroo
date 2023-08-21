import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/CreateUserDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*   @Get()
  getHello(): string {
    return this.appService.getHello();
  } */

    @Post("sign-up")
    @HttpCode(HttpStatus.OK)
    createUser(@Body() body: CreateUserDTO) {
      return this.appService.createUser(body);
}
}
