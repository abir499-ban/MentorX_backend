import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/model/user.schema';
import { createUserDTO } from './dto/createUserDTO';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private UserModel: Model<User>) {
    }

    async createUser(createUserDTO : createUserDTO) : Promise<User>{
        const doesUserExist = await this.UserModel.findOne({email : createUserDTO.email});
        if(doesUserExist) throw new Error('USer with this email already exists');

        const user = new this.UserModel(createUserDTO);
        await user.save();
        return user
    }

}
