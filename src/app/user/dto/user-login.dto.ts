import { IsEmail } from 'class-validator';

export class UserLogin {
  @IsEmail()
  email: string;

  @IsEmail()
  password: string;
}
