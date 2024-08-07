import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionEntity } from "src/infraestructure/entity/transaction.entity";
import { TransactionRepository } from "src/infraestructure/repository/transaction.repository";

const providers = [
    TransactionRepository,
]

@Module({
    imports: [
        TypeOrmModule.forFeature([TransactionEntity]),
    ],
    providers: [
        ...providers
    ],
    exports: [
        ...providers
    ]
})
export class SecondaryAdapterModule {}