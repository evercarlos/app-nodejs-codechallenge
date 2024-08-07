/**
 * Autor: EVER CARLOS ROJAS
 */
import { Module } from "@nestjs/common";
import { TransactionController } from "./v1/transaction.controller";
import { DomainModule } from "src/domain/domain.module";
import { TransactionPublisher } from "src/infraestructure/publisher/transaction.publisher";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { TransactionSubscriber } from "src/infraestructure/subscriber/transaction.subscriber";
import { KafkaConfig } from "../common/kafka.config";


@Module({
    imports: [

      ClientsModule.register([{
        name: KafkaConfig.kafkaServiceName,
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [KafkaConfig.kafkabrokerUrl],
            ssl: false,
            /*sasl: {
                mechanism: 'plain',
                username: 'ever',
                password: '123'
            }*/
          }
        }
      }]),
      DomainModule //Importamos service y port
    ],
    providers:[
      TransactionPublisher,
      TransactionSubscriber
    ],
    controllers: [
      TransactionController
    ]
})

export class ControllerModule {}