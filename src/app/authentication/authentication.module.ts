import { Module } from '@nestjs/common';
import { AuthService } from './authentication.service';

@Module({
  controllers: [],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthenticationModule {}
