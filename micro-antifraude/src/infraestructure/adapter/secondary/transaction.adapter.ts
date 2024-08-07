/**
 * Autor: EVER CARLOS ROJAS
 */

import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Transaction } from "src/domain/model/transaction";
import { TransactionPort } from "src/domain/port";

@Injectable()
export class TransactionAdapter implements TransactionPort {

    constructor(
    ) {}

      findAll(sortBy: string): Observable<Transaction[]> {
       return;
    }
    
    findById(id: number): Observable<Transaction> {
        return;
    }

    create(transaction: Transaction) : Observable<Transaction>{
        return;
    }
    delete() {
        return;
    }

}