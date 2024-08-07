
import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class Transaction {

    @Optional()
    id: string;
    
    @IsNotEmpty()
    @IsUUID()
    accountExternalIdDebit: string;

    @IsNotEmpty()
    @IsUUID()
    accountExternalIdCredit: string;

    @IsNotEmpty()
    @IsNumber()
    tranferTypeId: number;

    @IsNotEmpty()
    @IsNumber()
    value: number;

    transactionStatus: string

    state: boolean;

    constructor(id: string, accountExternalIdDebit: string, accountExternalIdCredit: string, tranferTypeId: number, value: number, transactionStatus: string, state: boolean) {
        this.id = id;
        this.accountExternalIdDebit = accountExternalIdDebit;
        this.accountExternalIdCredit = accountExternalIdCredit;
        this.tranferTypeId = tranferTypeId;
        this.value = value;
        this.transactionStatus = transactionStatus;
        this.state = state;
    }
}