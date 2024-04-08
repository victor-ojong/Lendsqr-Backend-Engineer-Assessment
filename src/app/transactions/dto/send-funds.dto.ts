import { IsNumber, IsString } from 'class-validator';

export class SendFundsDto {
  @IsNumber()
  amount: number;

  @IsString()
  description: string;

  @IsNumber()
  to_account: number;

  @IsString()
  currency: string;
}
