import { Controller, Post,Body, Param,Get,Patch } from '@nestjs/common';
import { Mentor_ServiceService } from './mentor_Service.service';
import { create } from 'domain';
import { Mentor_Service } from 'src/model/mentor_Service.schema';

@Controller('mentor_Service')
export class Mentor_ServiceController {
  constructor(private readonly mentor_ServiceService: Mentor_ServiceService) {}

  @Post()
  async createService(@Body() createServiceDTO : Mentor_Service) {
    return await this.mentor_ServiceService.createService(createServiceDTO)
  }

  @Get('/:id')
  async getService(@Param('id') id : string){
    return await this.mentor_ServiceService.findService(id)
  }

  @Patch('/:id')
  async updateService(@Param('id') id : string, @Body() updateServiceDTO : Mentor_Service){
    return await this.mentor_ServiceService.updateService(id, updateServiceDTO)
  }
}