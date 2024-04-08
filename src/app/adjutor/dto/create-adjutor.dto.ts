import { IsNumber, IsString } from 'class-validator';

export class CreateAdjutorDto {
  @IsNumber()
  bvn: number;

  @IsString()
  phone: string;
}
