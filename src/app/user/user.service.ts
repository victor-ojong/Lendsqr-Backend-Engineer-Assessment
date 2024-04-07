import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async createAccount(createAccount: CreateUserDto) {
    const timestamp = Date.now();
    const user = await this.knex.table('users').insert({
      firstName: createAccount.firstName,
      lastName: createAccount.lastName,
      password: createAccount.password,
      bvn: createAccount.bvn,
      accountNumber: createAccount.phone,
      phone: createAccount.phone,
      userLevel: 0,
      createdAt: timestamp,
      updatedAt: timestamp,
      balance: 0.0,
    });
    return user;
  }

  async findByEmail(email: string): Promise<User[]> {
    const user = await this.knex<User>('users').where('email', email);
    return user;
  }

  async findOne(id: number): Promise<User[]> {
    const user = await this.knex.table<User>('user').where('id', id);
    return user;
  }
}
