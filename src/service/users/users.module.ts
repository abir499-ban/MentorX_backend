import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/model/user.schema';
import { OtpModule } from '../otp/otp.module';

@Module({
  imports:[MongooseModule.forFeature([{name: User.name, schema : UserSchema}]),
  forwardRef(()=>OtpModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService, MongooseModule]
})
export class UsersModule {}
