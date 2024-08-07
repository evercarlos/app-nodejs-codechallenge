import { Observable } from "rxjs";
import { Transaction } from "../model/transaction";
import { TransactionResponse } from "../model/transaction-response";

export abstract class  TransactionPort {

    abstract findAll(soryBy: string): Observable<TransactionResponse[]>;

    abstract findById(id: string): Observable<TransactionResponse>;

    abstract create(transaction: Transaction): Observable<TransactionResponse>;

    abstract update(transaction: Transaction);

}