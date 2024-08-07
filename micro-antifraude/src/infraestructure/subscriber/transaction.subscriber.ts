/**
 * Autor: EVER CARLOS ROJAS
 */

import { Injectable, Logger } from '@nestjs/common';

import { TransctionService } from 'src/domain/service';
import { TransactionPublisher } from '../publisher/transaction.publisher';
import { Transaction } from 'src/domain/model/transaction';
import { TransactionResponse } from 'src/domain/model/transaction-reponse';
import { TransactionStatus } from 'src/domain/enum/transaction_status';


@Injectable()
export class TransactionSubscriber  {

  constructor(
    private readonly transactionService: TransctionService,
    private readonly transactionPublisher: TransactionPublisher
  ) {}


  private readonly logger = new Logger(TransactionSubscriber.name);

  /**
   * Consumer encargado de recepcioner las transacciones pendientes 
   * @param transaction - La transacción a procesar
   * 
  */
  public async handler(payload: Transaction): Promise<void> {

    this.logger.log(`starting process`);

    this.logger.log(`message: ${JSON.stringify(payload)}`);

    this.transactionService.evaluateRisk(payload).subscribe({
      next: (response: TransactionResponse) => {
         if(response.transactionStatus === TransactionStatus.APPROVED) {
            this.transactionPublisher.publisherApproved(response);
          } else {
            this.transactionPublisher.publisherRejected(response);
          }
      },
      error: (err: any) => {
        this.logger.error(`Error processing transaction: ${err}`);
      },
    });

   }

}
