import { Controller, Post, Body } from '@nestjs/common';
import { OtpService } from './otp.service';
import { createOTP_DtO, OtpDTO} from './dto/otp.dto'

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) { }

  

}
