import { IsString } from 'class-validator';

export class VerifyTokenDto {
  @IsString()
  otp: string;

  @IsString()
  password: string;
}
