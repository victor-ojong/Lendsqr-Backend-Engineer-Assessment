import { Controller, Post, Body, Req } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { SendFundsDto } from './dto/send-funds.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/send')
  async sendFunds(@Body() sendFunds: SendFundsDto, @Req() req: any) {
    const user = req.user;
    return this.transactionsService.sendFunds(sendFunds, user);
  }
}
