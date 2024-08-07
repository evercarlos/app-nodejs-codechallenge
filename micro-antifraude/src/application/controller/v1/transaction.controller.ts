/**
 * Autor: EVER CARLOS ROJAS
 */
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

import { TransactionSubscriber } from "src/infraestructure/subscriber/transaction.subscriber";

@Controller('risk')
export class TransactionController {

    constructor(
        private readonly transactionSubscriber: TransactionSubscriber
    ){

    }

    @EventPattern('topic.fraud.created')
    public async handleEventCreated(@Payload() payload: any) {
      await this.transactionSubscriber.handler(payload);
    }
   
}