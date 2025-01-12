import { Controller, Body, Post, BadRequestException, Patch, Get, Param } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { create_Mentor_Type, createMentorDTO, update_Mentor_Type, updateMentorDTO } from './dto/mentor.dto';
import { Mentor } from 'src/model/mentor.schema';

@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) { }

  @Get('/:id')
  async getMentor(@Param('id') id: string) {
    return await this.mentorService.findMentor(id)
  }

  @Post()
  async createMentor(@Body() createMentor: Mentor) {

    return await this.mentorService.createMentor(createMentor)

  }

  @Patch()
  async updateMentor(@Body() updateDTO: update_Mentor_Type) {
    try {
      updateDTO = updateMentorDTO.parse(updateDTO);
      await this.mentorService.updateMentor(updateDTO)
      return {
        message: 'Mentor Updated',
        success: true
      }
    }
    catch (error) {
      throw new BadRequestException(error)
    }

  }


}