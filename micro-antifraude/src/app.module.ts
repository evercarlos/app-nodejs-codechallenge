import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [
    InfraestructureModule,
    ApplicationModule
  ],
  providers: [],
})
export class AppModule {}
