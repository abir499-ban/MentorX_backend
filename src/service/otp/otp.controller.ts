import { Controller, Post, Body, Get, BadRequestException } from '@nestjs/common';
import { OtpService } from './otp.service';
import { Otp_verifyDTO } from './dto/otp.dto'

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) { }

  @Post('/verify')
  async verify(@Body() verifyOTPdto: Otp_verifyDTO) {
    const isVerified = await this.otpService.verifyOTP(verifyOTPdto);
    if (isVerified == true) {
      return {
        message: 'OTP verified',
        success: true
      }
    } else {
      return new BadRequestException("Wrong OTP")
    }
  }


}
