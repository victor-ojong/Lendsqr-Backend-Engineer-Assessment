import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  bvn: number;

  @IsString()
  password: string;

  @IsPhoneNumber()
  phone: number;
}
