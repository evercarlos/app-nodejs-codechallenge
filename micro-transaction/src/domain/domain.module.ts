import { Module } from "@nestjs/common";
import { TransctionService } from "./service";
import { InfraestructureModule } from "src/infraestructure/infraestructure.module";

const providers = [
  TransctionService,
];

@Module({
  imports: [
    InfraestructureModule // port: import de infra ya que en este modulo "domain" una clase abstract (impl) no puede ser importado o no puede ser providers
  ],
  providers: [
    ...providers,
  ],
  exports: [
    ...providers
  ]
})
export class DomainModule {}