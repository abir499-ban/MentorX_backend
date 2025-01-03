import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './service/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { OtpModule } from './service/otp/otp.module';
import { AuthModule } from './service/auth/auth.module';
import { MentorModule } from './service/mentor/mentor.module';
import { Mentor_ServiceModule } from './service/mentor_Service/mentor_Service.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
    inject: [ConfigService],
  }),
    UsersModule,
    OtpModule,
    AuthModule,
    MentorModule,
    Mentor_ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
