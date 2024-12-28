import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './service/users/users.module';
import { ConfigModule,ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { OtpModule } from './service/otp/otp.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : '.env'
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
    inject: [ConfigService],
  }),
    UsersModule,
    OtpModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
