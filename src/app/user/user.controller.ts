import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { UserLogin } from './dto/user-login.dto';
import { AuthService } from './authentication.service';
// import { request as ExpressRequest } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  createAccount(@Body() createUserDto: CreateUserDto) {
    return this.authService.createAccount(createUserDto);
  }

  @Post('/login')
  async login(@Body() body: UserLogin, @Session() session: any) {
    const user = await this.authService.login(body);
    session.userId = user.id;
    return user;
  }

  @Get('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
    return { status: 'success', message: 'You are logged out' };
  }
}
