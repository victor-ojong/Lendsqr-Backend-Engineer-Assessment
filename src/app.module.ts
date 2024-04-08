import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './app/user/user.module';
import { KnexModule } from 'nest-knexjs';
import { TransactionsModule } from './app/transactions/transactions.module';
import { AdjutorModule } from './app/adjutor/adjutor.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          database: 'lender_App',
          user: 'root',
          password: '',
          host: 'localhost',
          port: 3306,
          ssl: false,
        },
      },
    }),

    UserModule,
    TransactionsModule,
    AdjutorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
