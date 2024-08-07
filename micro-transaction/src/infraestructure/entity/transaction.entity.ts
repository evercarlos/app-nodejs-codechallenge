/**
 * Autor: EVER CARLOS ROJAS
 */

import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'transacciones'})
export class TransactionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'id_debit'})
    accountExternalIdDebit: string;

    @Column({ name: 'id_credit'})
    accountExternalIdCredit: string;

    @Column({ name: 'id_transfer_type'}) // 1: pendiente 2: aprodo, 3: rechazado
    tranferTypeId: number;
    
    @Column({ name: 'valor'})
    value: number; 
    
    @Column({ name: 'transaction_status'})
    transactionStatus: string;

    @Column({ name: 'state', default: true })
    state: boolean;

    @Column({ name: 'created_at'})
    createdAt: string;
}