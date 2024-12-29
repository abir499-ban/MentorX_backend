import { Injectable } from '@nestjs/common';
import { createOTP_DtO, OtpDTO } from './dto/otp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/user.schema';
import { Model } from 'mongoose';
import {v4 as uuid} from 'uuid'

@Injectable()
export class OtpService {
    constructor(@InjectModel(User.name) private UserModel : Model<User>){}

    async generateOTP(createotpDTO : OtpDTO){
        createotpDTO =  createOTP_DtO.parse(createotpDTO)
        const email = createotpDTO.email
        const otp = uuid();
        await this.UserModel.findOneAndUpdate({email : email}, {
            $set:{
                otp : otp,
                otpExpiry : Date.now() + 3600000
            }
        })
    }
}
