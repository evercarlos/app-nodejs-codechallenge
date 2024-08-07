/**
 * Autor: EVER CARLOS ROJAS
*/

import { Property } from "src/infraestructure/config/config-server/config-server.decorador";


export class KafkaConfig {
    
    @Property('kafka.brokers.url')
    public static readonly kafkabrokerUrl: string;

    @Property('kafka.service.name')
    public static readonly kafkaServiceName: string;
    
}