import { Module } from '@nestjs/common';
import { AdjutorService } from './adjutor.service';
import { AdjutorController } from './adjutor.controller';

@Module({
  controllers: [AdjutorController],
  providers: [AdjutorService],
})
export class AdjutorModule {}
