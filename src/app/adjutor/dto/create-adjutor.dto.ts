import { IsString } from 'class-validator';

export class CreateAdjutorDto {
  @IsString()
  bvn: string;

  @IsString()
  phone: string;
}
