/**
 * Autor: EVER CARLOS ROJAS
 */
import { Inject, Injectable} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { TransactionResponse } from "src/domain/model/transaction-reponse";


@Injectable()
export class TransactionPublisher { // publisher solo para convertir datos no mucha logica
  

  constructor(@Inject('KAFKA') private readonly kafka: ClientProxy) {}

  publisherApproved(payload: TransactionResponse) {

    const message: string = JSON.stringify(payload);

    this.kafka.emit('topic.fraud.approved', message);
  }

  publisherRejected(payload: TransactionResponse) {

    const message: string = JSON.stringify(payload);
    
    this.kafka.emit('topic.fraud.rejected', message);
  }
} 