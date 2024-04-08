import { IsString } from 'class-validator';

export class UserLogin {
  @IsString()
  phone: string;

  @IsString()
  password: string;
}
