import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { KAFKA_CONFIG } from './infraestructure/config/kafka/helper.config';

const port = process.env.PORT || '3001';

async function bootstrap() {

  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);
    //FIXME: Refactorizar agregando en su propio módulo y en el modulo de infra
    app.connectMicroservice(KAFKA_CONFIG);
    app.startAllMicroservices();
    await app.listen(port);
    
   logger.log(`App running on port: ${ port }`);

  } catch (error) {
    logger.error(`Error instantiated server`, error);
  }
}

void bootstrap();