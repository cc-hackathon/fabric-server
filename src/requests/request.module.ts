import { Module, NestModule } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { ChainModule } from '../core/chain/chain.module';

@Module({
    controllers: [
        RequestController,
    ],
    providers: [
        RequestService,
    ],
    imports: [
        ChainModule,
    ]
})
export class RequestModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        return undefined;
    }
}
