import { Controller, Body, Post, BadRequestException } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { create_Mentor_Type, createMentorDTO } from './dto/mentor.dto';

@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) { }

  @Post()
  async createMentor(@Body() createMentor: create_Mentor_Type) {
    try {
      createMentor = createMentorDTO.parse(createMentor);
      const mentor = await this.mentorService.createMentor(createMentor)
      return {
        message: 'Mentor Profile registered successfully',
        success : true,
        mentor
      }
    }
    catch (error) {
      return new BadRequestException('error Occured')
    }



  }
}