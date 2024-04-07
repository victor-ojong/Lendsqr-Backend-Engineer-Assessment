import { CreateUserDto } from 'src/app/user/dto/create-user.dto';

declare module 'knex/types/tables' {
  interface Tables {
    user: CreateUserDto;
    users_composite: Knex.CompositeTableType<
      CreateUserDto,
      Pick<CreateUserDto, 'id'> &
        Partial<Pick<User, 'createdAt' | 'updatedAt'>>,
      Partial<Omit<CreateUserDto, 'id'>>
    >;
  }
}
