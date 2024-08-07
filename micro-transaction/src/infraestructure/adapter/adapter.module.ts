import { Module } from "@nestjs/common";
import { SecondaryAdapterModule } from "./secondary/secondary-adapter.module";


@Module({

    imports: [
        SecondaryAdapterModule, // SQL Ó NOSQL
    ],
    exports: [
        SecondaryAdapterModule, // SQL Ó NOSQL
    ]
})
export class AdapterModule {}