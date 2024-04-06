import { Test } from '@nestjs/testing';
import { CurrentUser } from './users.interceptor';
// import { User } from 'src/app/Repositories/users.entity';
import { UserService } from '../user/user.service';

let currentUser: CurrentUser;

describe('CurrentUser Interceptor', () => {
  beforeEach(async () => {
    const fakeUsersService: Partial<UserService> = {
      // findOne: () => Promise.resolve({} as User),
    };
    const module = await Test.createTestingModule({
      providers: [
        CurrentUser,
        {
          provide: UserService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    currentUser = module.get(CurrentUser);
  });

  it('should be defined', async () => {
    expect(currentUser).toBeDefined();
  });
});
