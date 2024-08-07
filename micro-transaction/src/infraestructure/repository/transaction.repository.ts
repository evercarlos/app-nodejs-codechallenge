/**
 * Autor: EVER CARLOS ROJAS
 */


import { Injectable,Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from "typeorm";
import { TransactionEntity } from "../entity/transaction.entity";
import { Observable,from, switchMap } from "rxjs";


@Injectable()
export class TransactionRepository {

    constructor(
        @InjectRepository(TransactionEntity)
        private transactionRepository: Repository<TransactionEntity>
    ){
    }

    private readonly logger = new Logger(TransactionRepository.name);

    findAll(sortBy: string): Observable<TransactionEntity[]> {
         
        return from(this.transactionRepository.find({ order: { [sortBy]: 'DESC' } }));
    }

    findById(id: string) : Observable<TransactionEntity>{
        
        return from(this.transactionRepository.findOne({ where: { id } }))
            .pipe(
                switchMap(entity => {
                    if (!entity) {
                        throw new NotFoundException(`Transaction with id ${id} not found`);
                    }
                    return [entity];
                })
            );
    }

    findByTransactionExternalId(transactionExternalId: string) : Observable<TransactionEntity>{  
        return from(this.transactionRepository.findOne({ where: { accountExternalIdDebit: transactionExternalId } }));
    }

    create(request: TransactionEntity): Observable<TransactionEntity> {
      return from(this.transactionRepository.save(request));
    }
    

    update(request: TransactionEntity) { 
      this.logger.log(`update transaction ${ JSON.stringify(request)}`);  
      const { id, ...updateData } = request;
      this.transactionRepository.update(id, updateData);  
    }
    
}













