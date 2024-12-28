import { Controller, Post, Body } from '@nestjs/common';
import { OtpService } from './otp.service';
import { createOTP_DtO, OtpDTO} from './dto/otp.dto'

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) { }

  @Post()
  async createOTP(@Body() createOTPDTO: OtpDTO) {
    createOTPDTO=  createOTP_DtO.parse(createOTPDTO)
    const otp = this.otpService.generateOTP(createOTPDTO)
    return {
      otp : otp
    }
  }

}
