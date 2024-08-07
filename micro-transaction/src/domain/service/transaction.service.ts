/**
 * Autor: EVER CARLOS ROJAS
 */
import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

import { TransactionPort } from "../port/transaction.port";
import { Transaction } from "../model/transaction";
import { TraansactionStatus } from "../enum/transaction_status";
import { TransactionResponse } from "../model/transaction-response";


@Injectable()
export class TransctionService {

    constructor(
        private readonly transactionPort: TransactionPort,
    ){

    }

    findAll(sortBy: string) {
      try {
        return this.transactionPort.findAll(sortBy);
      }catch (err) {
        throw err;
      }
    }

    findById(id: string) {
        return this.transactionPort.findById(id);
    }

    
    create(transaction: Transaction): Observable<TransactionResponse> {
      try {
        transaction.transactionStatus = TraansactionStatus.PENDIING;
        return this.transactionPort.create(transaction);
      } catch(err) {
        throw err;
      }
    }

    update(transaction: Transaction) {
      this.transactionPort.update(transaction);
    }
    

    
}