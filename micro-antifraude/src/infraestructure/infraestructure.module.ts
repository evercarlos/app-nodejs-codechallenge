/**
 * Autor: EVER CARLOS ROJAS
 */
import { Module } from "@nestjs/common";
import { AdapterModule } from "./adapter/adapter.module";
import { TransactionPort } from "src/domain/port";

//NOTA: Elegir que tipo de adaptador(primary ó secondary) será la fuente de información(select, create, update, delete) para cada adaptador
import { TransactionAdapter } from "./adapter/secondary/transaction.adapter";
import { SharedModule } from "./config/shared.module";

const providers = [
  {
    provide: TransactionPort,
    useClass: TransactionAdapter
  },
]
@Module({
  imports: [
    SharedModule,
    AdapterModule,
  ],
  providers: [
    ...providers
  ],
  exports: [
    TransactionPort
  ],
})
export class InfraestructureModule {}