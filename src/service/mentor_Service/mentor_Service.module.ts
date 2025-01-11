import { MiddlewareConsumer, Module } from '@nestjs/common';
import { Mentor_ServiceService } from './mentor_Service.service';
import { Mentor_ServiceController } from './mentor_Service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mentor_Service, Mentor_ServiceSchema } from '../../model/mentor_Service.schema'
import { UsersModule } from '../users/users.module';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';

@Module({
  imports: [UsersModule,
    MongooseModule.forFeature([{ name: Mentor_Service.name, schema: Mentor_ServiceSchema }]),
    ],
  controllers: [Mentor_ServiceController],
  providers: [Mentor_ServiceService],
})
export class Mentor_ServiceModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('mentor_Service')
  }
 }
