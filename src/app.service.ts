import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Lendsqr Backend Engineer Assessment server is running! 👍';
  }
}
