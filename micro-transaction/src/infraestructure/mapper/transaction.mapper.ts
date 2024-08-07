/**
 * Autor: EVER CARLOS ROJAS
 */

import { Transaction } from "src/domain/model/transaction";
import { TransactionEntity } from "../entity/transaction.entity";
import { v4 as uuid }  from 'uuid';
import { TransactionResponse } from "src/domain/model/transaction-response";
import { TransactionType } from "src/domain/model/transaction-type";
import { TransactionStatus } from "src/domain/model/transaction-status";

export class TransactionMapper {

    public static mapToTransaction(entity: TransactionEntity): Transaction {
        return new Transaction(
            entity.id,
            entity.accountExternalIdDebit,
            entity.accountExternalIdCredit,
            entity.tranferTypeId,
            entity.value,
            entity.transactionStatus,
            entity.state
        );
    } 

    public static mapToEntityTransactionCreate(transaction: Transaction): TransactionEntity {
        const transactionEntity = new TransactionEntity();
        transactionEntity.id = uuid(); // FIXME: Quitar luego de validar en la entidad TransactionEntity
        transactionEntity.accountExternalIdDebit = transaction.accountExternalIdDebit;
        transactionEntity.accountExternalIdCredit = transaction.accountExternalIdCredit;
        transactionEntity.tranferTypeId = transaction.tranferTypeId;
        transactionEntity.value = transaction.value;
        transactionEntity.transactionStatus = transaction.transactionStatus;
        transactionEntity.state = transaction.state;
        
        return transactionEntity;
    }

    public static mapToEntityTransactionUpdate(transaction: Transaction): TransactionEntity {
        const transactionEntity = new TransactionEntity();
        transactionEntity.id = transaction.id; // FIXME: Quitar luego de validar en la entidad TransactionEntity
        transactionEntity.accountExternalIdDebit = transaction.accountExternalIdDebit;
        transactionEntity.accountExternalIdCredit = transaction.accountExternalIdCredit;
        transactionEntity.tranferTypeId = transaction.tranferTypeId;
        transactionEntity.value = transaction.value;
        transactionEntity.transactionStatus = transaction.transactionStatus;
        transactionEntity.state = transaction.state;
        
        return transactionEntity;
    }

    public static mapToTransactions(entities: TransactionEntity[]): Transaction[] {
        return entities.map(entity => TransactionMapper.mapToTransaction(entity));
    }

    public static mapToTransactionResponse(entity: TransactionEntity): TransactionResponse {
        
        const type = (entity.tranferTypeId === 1)? 'credito': 'debito';

        const transferType: TransactionType = {
            name: type
        }
        const transferStatus: TransactionStatus = {
            name: entity.transactionStatus
        }

        return new TransactionResponse(
            entity.id,
            transferType,
            entity.value,
            transferStatus,
            entity.createdAt,
        );
    } 

}
