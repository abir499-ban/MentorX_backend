import { Controller, Body, Post, HttpCode, Get, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/model/user.schema';
import { OtpService } from '../otp/otp.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly otpService: OtpService
  ) {
  }

  // @Get()
  // async sayHI(){
  //   return 'Hello'
  // }

  @Post()
  @HttpCode(201)
  async createUser(@Body() createUserDTO: User) {
    console.log(createUserDTO);
    try {
      if (!createUserDTO.firstName || !createUserDTO.firstName || !createUserDTO.lastName || !createUserDTO.password) {
        throw new BadRequestException("Incompleete Payload")
      }


      const user = await this.usersService.createUser(createUserDTO);

      await this.otpService.generateOTP({ email: createUserDTO.email })


      return {
        message: 'User created successfully',
        success: true,
      }

    } catch (error) {
      console.log(error.message)
      return new BadRequestException({ message: 'Internal server Error', success: false })
    }
  }
}


