import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PGDBConfig } from "./pg-db.config";

@Module({
    imports: [
        ConfigModule.forRoot(), // Global para variables de entorno
        
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: PGDBConfig.pgdbUri,  // process.env.DB_HOST
            port: PGDBConfig.pgdbPort, //+process.env.DB_PORT,
            database: PGDBConfig.pgdbName, // process.env.DB_NAME,
            username: PGDBConfig.pgdbUser, //process.env.DB_USERNAME,
            password: PGDBConfig.pgdbPassword, //process.env.DB_PASSWORD,
            autoLoadEntities: true,
            synchronize: false // Para sincronizar atributos de tablas de base de datos. PRD: false
        }),
    ]
})
export class PostgreSqlModule {}