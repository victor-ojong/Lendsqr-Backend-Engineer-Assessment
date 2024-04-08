import { Controller, Get, Post, Body, Session, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { UserLogin } from './dto/user-login.dto';
import { AuthService } from './authentication.service';
// import { Request as ExpressRequest } from 'express';

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
  // protected route
  @Post('/verify-bvn')
  verifyBvn(@Req() req: any) {
    //sk_live_S3WPw39YfccMoIW3qgUkMMmmmgJK6v0dWPCp6eM4
  }

  @Get('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
    return { status: 'success', message: 'You are logged out' };
  }
}
