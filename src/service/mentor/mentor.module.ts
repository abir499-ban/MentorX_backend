import { Module } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { MentorController } from './mentor.controller';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MentorSchema,Mentor } from 'src/model/mentor.schema';

@Module({
  imports:[UsersModule,
    MongooseModule.forFeature([{name : Mentor.name, schema : MentorSchema}])
  ],
  controllers: [MentorController],
  providers: [MentorService],
})
export class MentorModule {}
