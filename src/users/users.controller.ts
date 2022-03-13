import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor (private usersService: UsersService) {}
  @Post('/register')
  create(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Get('/user')
  test(@Request() req){
    return this.usersService.findUserByMail(req.mail)
  }
}
