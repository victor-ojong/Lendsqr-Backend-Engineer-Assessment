import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsOptional()
  email: string | null;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  bvn: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsNumber()
  @IsOptional()
  balance?: number;

  @IsString()
  @IsOptional()
  accountNumber?: string;

  @IsNumber()
  @IsOptional()
  userLevel?: 1 | 0;

  @IsNumber()
  @IsOptional()
  id?: number;
}
