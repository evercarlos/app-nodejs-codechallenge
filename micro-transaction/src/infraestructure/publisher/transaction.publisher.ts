/**
 * Autor: EVER CARLOS ROJAS
 */

import { Inject, Injectable} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { TransactionResponse } from "src/domain/model/transaction-response";


@Injectable()
export class TransactionPublisher {

  constructor(@Inject('KAFKA') private readonly kafka: ClientProxy) {}

  publisherRegister(payload: TransactionResponse) {
    const msg =  {
       id: payload.transactionExternalId,
       value: payload.value,
    }
    const message: string = JSON.stringify(msg);

    this.kafka.emit('topic.fraud.created', message);
  }
}  