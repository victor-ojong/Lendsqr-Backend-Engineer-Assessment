import {
  Controller,
  Post,
  Body,
  Req,
  Get,
  UseGuards,
  UseInterceptors,
  Param,
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

  @Get('/report')
  async getReport(@Req() req: any) {
    return await this.transactionsService.accountStatement(req.user[0].id);
  }

  @Get('/balance')
  async getBalance(@Req() req: any) {
    return await this.transactionsService.getBalance(req.user[0].id);
  }
}
