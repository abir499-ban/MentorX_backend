import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mentor } from 'src/model/mentor.schema';
import { create_Mentor_Type, update_Mentor_Type } from './dto/mentor.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class MentorService {
    constructor(@InjectModel(Mentor.name) private MentorModel : Model<Mentor>){}


    async createMentor(createMentor : Mentor){
        const doesmentor = await this.MentorModel.findOne({userID : createMentor.userID})
        if(doesmentor) return new BadRequestException('You are already registered as a mentor')
        const mentor = new this.MentorModel(
            createMentor,
        )

        await mentor.save()
        return mentor;
    }

    async updateMentor(updateDTO : update_Mentor_Type){
        try {
            await this.MentorModel.findOneAndUpdate({userID :  updateDTO.id}, {
                $set: {
                    domain : updateDTO.domain,
                    company : updateDTO.company,
                    position : updateDTO.position,
                    about : updateDTO.about,
                    metaData : updateDTO.metaData
                }
            })
        } catch (error) {
            throw new BadRequestException('Internal Server error')
        }
        
    }

    async findMentor(id : string){
        const mentor = await this.MentorModel.findById(id)
        return mentor
    }



}
