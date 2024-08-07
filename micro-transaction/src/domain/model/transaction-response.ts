import { TransactionStatus } from "./transaction-status";
import { TransactionType } from "./transaction-type";

export class TransactionResponse {

    transactionExternalId: string;

    transactionType: TransactionType;

    value: number;

    transactionStatus: TransactionStatus;

    createdAt: string;


    constructor(
        transactionExternalId: string,
        transactionType: TransactionType,
        value: number,
        transactionStatus: TransactionStatus,
        createdAt: string
    ) {
        this.transactionExternalId = transactionExternalId;
        this.transactionType = transactionType;
        this.value = value;
        this.transactionStatus = transactionStatus;
        this.createdAt = createdAt;
    }
}