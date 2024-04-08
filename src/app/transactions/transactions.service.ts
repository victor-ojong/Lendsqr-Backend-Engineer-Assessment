import { Injectable } from '@nestjs/common';
import { SendFundsDto } from './dto/send-funds.dto';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TransactionsService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async sendFunds(sendFundsDto: SendFundsDto, user: Partial<User>) {
    user = user[0];
    console.log(user);
    if (!this.validateBalance(sendFundsDto.amount, user.balance)) {
      return {
        status: 'fail',
        message: `Hi ${user.firstName}, you cannot transfer ${sendFundsDto.currency} ${sendFundsDto.amount} at the moment because it is more than your current balance`,
      };
    }

    const recipeint = await this.knex('user').where(
      'accountNumber',
      sendFundsDto.to_account,
    );

    // check if reciepeint account is valid
    if (recipeint.length < 1) {
      return {
        status: 'error',
        message: `no user found with this account number ${sendFundsDto.to_account}`,
      };
    }
    const receiver = recipeint[0];

    const newRecipeintBalance = this.sumAmount(
      sendFundsDto.amount,
      receiver.balance,
    );

    this.updateUsersBalance(receiver.id, newRecipeintBalance);

    const newSenderBalance = this.deductAmount(
      sendFundsDto.amount,
      user.balance,
    );

    this.updateUsersBalance(user.id, newSenderBalance);

    // save transaction to record
    const success = await this.saveTransactions(
      sendFundsDto,
      receiver.id,
      user,
    );

    if (!success) {
      return {
        status: 'fail',
        message: 'something went wrong please contact support',
      };
    }

    return {
      status: 'success',
      message: `${user.firstName} you have just transfered ${sendFundsDto.currency} ${sendFundsDto.amount} to ${sendFundsDto.to_account}`,
    };
  }

  private validateBalance(sendingAmount: number, balance: number) {
    return sendingAmount <= balance;
  }

  private sumAmount(balance: number, sentAmount: number) {
    return balance + sentAmount;
  }

  private deductAmount(balance: number, sentAmount: number) {
    return Math.abs(balance - sentAmount);
  }

  private async updateUsersBalance(id: number, balance: number) {
    await this.knex.table('user').where('id', id).update({ balance });
  }

  private async saveTransactions(
    sendFundsDto: SendFundsDto,
    receiver_id: number,
    user: Partial<User>,
  ) {
    // save to reciever records
    const reciepeintIsSaved = await this.knex.table('transactions').insert({
      user_id: receiver_id,
      type: 'credit',
      from_account: user.accountNumber,
      ...sendFundsDto,
    });
    // save to sender records
    const senderIsSaved = await this.knex.table('transactions').insert({
      user_id: user.id,
      type: 'debit',
      from_account: user.accountNumber,
      ...sendFundsDto,
    });

    return senderIsSaved.length > 0 && reciepeintIsSaved.length > 0
      ? true
      : false;
  }

  async accountStatement(id: number) {
    try {
      const statement = await this.knex
        .table('transactions')
        .where({ user_id: id });

      console.log(statement);
      return statement;
    } catch (err) {
      console.log('error');
    }
  }
}
