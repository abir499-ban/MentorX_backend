import { Injectable } from '@nestjs/common';
import { createOTP_DtO, Otp_verifyDTO, OtpDTO } from './dto/otp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/user.schema';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid'
import { sendMail } from 'src/lib/mailer';
import { generateOTPValue } from 'src/lib/generateOTPValue';

@Injectable()
export class OtpService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>) { }

    async generateOTP(createotpDTO: OtpDTO) {
        createotpDTO = createOTP_DtO.parse(createotpDTO)
        const email = createotpDTO.email
        const otp = await generateOTPValue();
        console.log(otp)
        await this.UserModel.findOneAndUpdate({ email: email }, {
            $set: {
                otp: otp,
                otpExpiry: Date.now() + 3600000
            }
        })

        await sendMail(email, otp)      //Send Mail with otp : await Mailer(email, otp)
    }

    async verifyOTP(verifyOTPdto: Otp_verifyDTO) {
        const email = verifyOTPdto.email;
        const otp = verifyOTPdto.otp;

        const user = (await this.UserModel.findOne({ email: email })) as User;    // tODO : Implement time checking
        if (user.otp == otp) {   
            return true;
        }
        return false;

    }



}
