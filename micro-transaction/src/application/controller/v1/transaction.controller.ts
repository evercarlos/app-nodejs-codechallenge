/**
 * Autor: EVER CARLOS ROJAS
 */

import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { map, tap } from "rxjs";
import { Transaction } from "src/domain/model/transaction";
import { TransctionService } from "src/domain/service";
import { TransactionPublisher } from "src/infraestructure/publisher/transaction.publisher";
import { TransactionSubscriber } from "src/infraestructure/subscriber/transaction.subscriber";

@Controller('transactions')
export class TransactionController {

    constructor(
        private readonly transactionService: TransctionService,
        private readonly transactionPublisher: TransactionPublisher,
        private readonly transactionSubscriber: TransactionSubscriber
    ){

    }

    @Get()
    findAll() {
       return this.transactionService.findAll('createdAt');
    }

    /**
    *Crea una nueva transacción
    * @param payload - request de la transaction
    */
    @Post()
    public registerTransacion(@Body() payload: Transaction) {  // FIXME: Agregar validador de dto
      return this.transactionService.create(payload).pipe(
         tap(resp => {
            this.transactionPublisher.publisherRegister(resp);
            return resp;
         }),
         map(transaction => transaction)
      );
    }
  

    @Get(':id')
    findBydId(@Param('id', ParseUUIDPipe) id: string){
       return this.transactionService.findById(id);
    }


    //FIXME: Refactorización: Cuando nestjs acepte EventPattern en un @Injectable() (service)

    /***** consumers *****/

    @EventPattern('topic.fraud.approved')
    public async handleEventApprove(@Payload() payload: any) {

       await this.transactionSubscriber.handler(payload);
    }
  
    @EventPattern('topic.fraud.rejected')
    public async handleEventRejected(@Payload() payload: any) {
      await this.transactionSubscriber.handler(payload);
    }

    
  
}