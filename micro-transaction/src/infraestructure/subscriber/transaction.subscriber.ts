/**
 * Autor: EVER CARLOS ROJAS
 */


import { Injectable, Logger } from '@nestjs/common';
import { TransctionService } from 'src/domain/service';


@Injectable()
export class TransactionSubscriber  {

  constructor(
    private readonly transactionService: TransctionService
  ) {}


  private readonly logger = new Logger(TransactionSubscriber.name);

  public async handler(payload: any): Promise<any> {
    this.logger.log(`starting process`);
    
    this.logger.log(`message: ${JSON.stringify(payload)}`);

    this.transactionService.update(payload);

    this.logger.log(`end process`);
  }
}
