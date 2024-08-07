/**
 * Autor: EVER CARLOS ROJAS
 */
import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain.module";
import { ControllerModule } from "./controller/controller.module";


@Module({
    imports: [
        DomainModule,
        ControllerModule
    ],
})
export class ApplicationModule {}