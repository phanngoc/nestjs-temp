import { Module } from '@nestjs/common';

import { CommonModule } from '../common';
import { PassengerController } from './controller';
import { PassengerService } from './service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
    imports: [
        CommonModule,
        RedisModule.forRoot({
            type: 'cluster',
            nodes: [
                {
                    host: 'redis-node-0',
                    port: 6379
                },
                {
                    host: 'redis-node-1',
                    port: 6379
                },
                {
                    host: 'redis-node-2',
                    port: 6379
                },
                {
                    host: 'redis-node-3',
                    port: 6379
                },
                {
                    host: 'redis-node-4',
                    port: 6379
                },
                {
                    host: 'redis-node-5',
                    port: 6379
                }
            ],
            options: {
              redisOptions: {
                password: 'bitnami'
              }
            }
          }),
      
      
    ],
    providers: [
        PassengerService
    ],
    controllers: [
        PassengerController
    ],
    exports: []
})
export class PassengerModule { }
