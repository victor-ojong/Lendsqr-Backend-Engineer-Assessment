import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Session,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../authentication/authentication.service';
import { UserLogin } from './dto/user-login.dto';
// import { request as ExpressRequest } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // user based action
  @Post()
  createAccount(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // transaction based action
  @Patch()
  recieveFunds() {
    return this.userService.findAll();
  }

  // transaction based action
  @Patch('/send-funds')
  sendFunds(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // transaction based action
  @Post('/loan-request')
  requestLoad(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // user based action
  @Patch('/close-account')
  closeAccount(@Req() req: any) {
    //
    return;
  }

  @Post('/login')
  async login(@Body() body: UserLogin, @Session() session: any) {
    const user = await this.authService.login(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Get('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
    return { status: 'success', message: 'You are logged out' };
  }

  // user based action
  @Get('/check')
  checkEligibility() {
    // use the  lendr api to check if user is blacklisted or not
    // this should be in the authentication service
  }
}
