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
    const userExist = await this.userService.findByPhone(
      createAccountDto.phone,
    );

    if (userExist.length > 0) {
      throw new HttpException('bvn already in use on our platform', 403);
    }
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(createAccountDto.password, salt, 32)) as Buffer;

    createAccountDto.password = salt + '.' + hash.toString('hex');

    return await this.userService.createAccount(createAccountDto);
  }

  async login(loginDto: UserLogin) {
    const user = await this.userService.findByPhone(loginDto.phone);

    const currentUser = user.at(0);

    if (!currentUser) {
      throw new HttpException('Invalid login credentials', 403);
    }

    const [salt, hashedDB] = currentUser.password.split('.');

    const newHash = (await scrypt(loginDto.password, salt, 32)) as Buffer;

    const isValid =
      hashedDB === newHash.toString('hex').slice(0, hashedDB.length);

    if (!isValid) {
      throw new HttpException('Invalid login credentials', 403);
    }
    currentUser.password = undefined;
    return currentUser;
  }
}
