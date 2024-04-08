import { Module } from '@nestjs/common';
import { AdjutorService } from './adjutor.service';
import { AdjutorController } from './adjutor.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AdjutorController],
  providers: [AdjutorService],
})
export class AdjutorModule {}
