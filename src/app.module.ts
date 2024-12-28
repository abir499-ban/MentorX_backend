import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './service/users/users.module';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest_test'),
    ConfigModule.forRoot({
    isGlobal : true
  }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
