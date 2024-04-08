import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { SendFundsDto } from './dto/send-funds.dto';
import { AuthGuard } from '../Guard/auth.guard';
import { CurrentUser } from '../interceptors/users.interceptor';

@UseGuards(AuthGuard)
@UseInterceptors(CurrentUser)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/send')
  async sendFunds(@Body() sendFunds: SendFundsDto, @Req() req: any) {
    const user = req.user;
    return this.transactionsService.sendFunds(sendFunds, user);
  }
}
