import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  async findByEmail(email: string) {
    // use the findOne method and get the users email
    // return it
    return 'This action adds a new user';
  }

  async createAccount(createAccount: CreateUserDto) {
    // create account with user data and return user object
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  signup(id: number) {
    return `This action removes a #${id} user`;
  }
}
