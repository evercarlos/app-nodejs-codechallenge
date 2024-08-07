/**
 * Autor: EVER CARLOS ROJAS
 */
import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";

import { Transaction } from "src/domain/model/transaction";
import { TransactionResponse } from "src/domain/model/transaction-response";
import { TransactionPort } from "src/domain/port";
import { TransactionMapper } from "src/infraestructure/mapper/transaction.mapper";
import { TransactionRepository } from "src/infraestructure/repository/transaction.repository";

@Injectable()
export class TransactionAdapter implements TransactionPort {

    constructor(
        private readonly transactionRepository: TransactionRepository,
    ) {}

    findAll(sortBy: string): Observable<TransactionResponse[]> {
        return this.transactionRepository.findAll(sortBy).pipe(
            map(entities => entities.map(entity => TransactionMapper.mapToTransactionResponse(entity)))
        );
    }
    
    findById(id: string): Observable<TransactionResponse> {
        return this.transactionRepository.findById(id).pipe(
            map(entity => TransactionMapper.mapToTransactionResponse(entity))
        );
    }

    create(transaction: Transaction) : Observable<TransactionResponse>{
     return this.transactionRepository.create(TransactionMapper.mapToEntityTransactionCreate(transaction)).pipe(
        map(entity => TransactionMapper.mapToTransactionResponse(entity))
     );
    }

    update(transaction: Transaction) {
        this.transactionRepository.update(TransactionMapper.mapToEntityTransactionUpdate(transaction));
    }



    
    delete() {
        throw new Error("Method not implemented.");
    }

}