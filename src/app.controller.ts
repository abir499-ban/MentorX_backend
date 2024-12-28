import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res : Response ): string {
    res.status(HttpStatus.OK)
    return this.appService.getHello();
  }

  
  
}
