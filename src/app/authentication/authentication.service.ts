import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';

import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserLogin } from '../user/dto/user-login.dto';
export const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async createAccount(createAccountDto: CreateUserDto) {
    const userExist = await this.userService.findByEmail(
      createAccountDto.email,
    );

    if (userExist) {
      throw new HttpException('Email already in use', 403);
    }
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(createAccountDto.password, salt, 32)) as Buffer;

    createAccountDto.password = salt + '.' + hash.toString('hex');

    return await this.userService.createAccount(createAccountDto);
  }

  async login(loginDto: UserLogin) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user) {
      throw new HttpException('Invalid login credentials', 403);
    }

    const [salt, hashedDB] = user.password.split('.');

    const newHash = (await scrypt(loginDto.password, salt, 32)) as Buffer;

    const isValid = hashedDB === newHash.toString('hex');

    if (!isValid) {
      throw new HttpException('Invalid login credentials', 403);
    }

    return user;
  }
}
