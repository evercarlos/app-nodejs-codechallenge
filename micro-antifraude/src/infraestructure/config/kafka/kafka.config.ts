/**
 * Autor: EVER CARLOS ROJAS
*/

import { Property } from "../config-server/config-server.decorador";


export class KafkaConfig {
    
    @Property('kafka.brokers.url')
    public static readonly kafkabrokerUrl: string;

    @Property('kafka.brokers.group.id')
    public static readonly kafkaGroupId: string;
    
}