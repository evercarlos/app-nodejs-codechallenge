import { Module } from "@nestjs/common";
import { PostgreSqlModule } from "./sql/postgresql.module";

@Module({
  imports: [
    PostgreSqlModule,
  ]
})
export class SharedModule {

}