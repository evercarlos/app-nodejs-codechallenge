import { KafkaOptions, Transport } from "@nestjs/microservices";
import { KafkaConfig } from "./kafka.config";


export const KAFKA_CONFIG: KafkaOptions = {
    transport: Transport.KAFKA,
    options: {
      /*subscribe: {
        fromBeginning: true,
      }*/
      consumer: {
        groupId: KafkaConfig.kafkaGroupId
      },
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
}
