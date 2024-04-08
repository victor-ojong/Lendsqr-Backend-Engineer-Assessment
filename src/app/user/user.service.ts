import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async createAccount(createAccount: CreateUserDto) {
    try {
      const user = await this.knex.table<User>('user').insert({
        firstName: createAccount.firstName,
        lastName: createAccount.lastName,
        password: createAccount.password,
        email: createAccount.email,
        bvn: createAccount.bvn,
        accountNumber: createAccount.phone,
        phone: createAccount.phone,
      });

      createAccount.password = undefined;
      return { id: user[0], ...createAccount };
    } catch (err) {
      console.log(`ERROR MESSAGE: ${err}`);
    }
  }

  async findByPhone(phone: string): Promise<User[]> {
    const user = await this.knex<User>('user').where('phone', phone);
    return user;
  }

  async findOne(id: number): Promise<User[]> {
    const user = await this.knex.table<User>('user').where('id', id);
    return user;
  }
}
