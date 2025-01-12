import { forwardRef, MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/model/user.schema';
import { OtpModule } from '../otp/otp.module';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';

@Module({
  imports:[MongooseModule.forFeature([{name: User.name, schema : UserSchema}]),
  forwardRef(()=>OtpModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService, MongooseModule]
})
export class UsersModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware)
    .exclude({path : 'users' , method : RequestMethod.POST},
      {path : 'users/token', method : RequestMethod.POST}
    )
    .forRoutes('users')
  }
}
