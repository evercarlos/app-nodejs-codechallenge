/**
 * Autor: EVER CARLOS ROJAS
 */

import { Observable, of } from "rxjs";
import { Injectable } from "@nestjs/common";

import { TransactionPort } from "../port/transaction.port";
import { Transaction } from "../model/transaction";
import { TransactionStatus } from "../enum/transaction_status";
import { TransactionResponse } from "../model/transaction-reponse";


@Injectable()
export class TransctionService {

    constructor(
        private readonly transactionPort: TransactionPort,// podemos llamar un motor, una db de riesgos, etc
    ){

    }

    evaluateRisk(payload: Transaction): Observable<TransactionResponse> {
      const response: TransactionResponse = {
        id: payload.id,
        value: payload.value,
        transactionStatus: (payload.value <= 1000) ?  TransactionStatus.APPROVED: TransactionStatus.REJECTED  
      } 

      return of(response); 
    }
    

    
}