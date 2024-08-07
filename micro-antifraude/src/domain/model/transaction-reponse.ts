
export class TransactionResponse {

    id: string;

    value: number;

    transactionStatus: string


    constructor(id: string, value: number, transactionStatus: string) {
        this.id = id;
        this.value = value;
        this.transactionStatus = transactionStatus;
    }
}