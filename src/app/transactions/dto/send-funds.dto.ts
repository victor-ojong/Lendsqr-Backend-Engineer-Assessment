import { IsNumber, IsString } from 'class-validator';

export class SendFundsDto {
  @IsNumber()
  amount: number;

  @IsString()
  description: string;

  @IsString()
  to_account: string;

  @IsString()
  currency: string;
}
