import { IsEmail, IsString } from 'class-validator';

export class UserLogin {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
