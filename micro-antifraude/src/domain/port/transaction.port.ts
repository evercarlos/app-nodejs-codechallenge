import { Observable } from "rxjs";
import { Transaction } from "../model/transaction";

export abstract class  TransactionPort {

    abstract findAll(soryBy: string): Observable<Transaction[]>;

    abstract findById(id: number): Observable<Transaction>;

    abstract create(transaction: Transaction): Observable<Transaction>;

}