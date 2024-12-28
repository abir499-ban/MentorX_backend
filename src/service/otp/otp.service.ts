import { Injectable } from '@nestjs/common';
import { OtpDTO } from './dto/otp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/user.schema';
import { Model } from 'mongoose';
import {v4 as uuid} from 'uuid'

@Injectable()
export class OtpService {
    constructor(@InjectModel(User.name) private UserModel : Model<User>){}

    async generateOTP(createOTP_DTO : OtpDTO){
        const email = createOTP_DTO.email
        const otp = uuid();
        const user = await this.UserModel.findOne({email : email})
        return otp;
    }
}
