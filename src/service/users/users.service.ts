import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/model/user.schema';
import { createUserDTO } from './dto/createUserDTO';
import * as bcryptjs from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private UserModel: Model<User>,
        private jwtService: JwtService) {
    }

    async createUser(createUserDTO: createUserDTO): Promise<User> {
        const doesUserExist = await this.UserModel.findOne({ email: createUserDTO.email });
        if (doesUserExist) throw new Error('USer with this email already exists');

        const salt = await bcryptjs.genSalt(10);

        const hashedpassword = await bcryptjs.hash(createUserDTO.password, salt)


        const user = new this.UserModel({
            ...createUserDTO,
            password: hashedpassword,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            isVerified: false
        });
        await user.save();
        return user
    }


    async findUser(email: string) {
        const user = await this.UserModel.findOne({ email: email })
        //console.log(user)
        return user;
    }

    async findUserfromToken(token : string){
        const user = await this.jwtService.verifyAsync(token, {
            secret : process.env.TOKEN_SECRET
        })
        return user;
    }

}
