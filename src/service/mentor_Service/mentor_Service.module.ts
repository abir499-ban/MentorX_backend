import { Module } from '@nestjs/common';
import { Mentor_ServiceService } from './mentor_Service.service';
import { Mentor_ServiceController } from './mentor_Service.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { MentorService } from '../mentor/mentor.service';

@Module({
  imports:[MongooseModule.forFeature([{name : MentorService.name , schema : MentorService}])],
  controllers: [Mentor_ServiceController],
  providers: [Mentor_ServiceService],
})
export class Mentor_ServiceModule {}
