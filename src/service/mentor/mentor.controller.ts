import { Controller, Body, Post } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { create_Mentor_Type, createMentorDTO } from './dto/mentor.dto';

@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Post()
  async createMentor(@Body() createMentor : create_Mentor_Type){
    createMentor = createMentorDTO.parse(createMentor);
    
  }
}