import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from './constants/jwt_config';

@Module({
  imports: [UsersModule,
    JwtModule.register(JwtConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
