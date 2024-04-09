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
          database: 'bxaoo1jubuwcy2br0gz7',
          user: 'usjvywpbahqyjpba',
          password: 'SnhQGelq9zRBlstJBsf7',
          host: 'bxaoo1jubuwcy2br0gz7-mysql.services.clever-cloud.com',
          port: 3306,
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
