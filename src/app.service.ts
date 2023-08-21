import { Injectable } from '@nestjs/common';
import User from './entities/users-entities';
import { CreateUserDTO } from './dtos/CreateUserDTO';

/* @Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
} */

@Injectable()
export class AppService {
  private users: User[] = [];

  createUser(userDTO: CreateUserDTO){
    return this.users.push(userDTO.toUser());
  }
}