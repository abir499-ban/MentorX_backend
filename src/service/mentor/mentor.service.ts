import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mentor } from 'src/model/mentor.schema';
import { create_Mentor_Type } from './dto/mentor.dto';

@Injectable()
export class MentorService {
    constructor(@InjectModel(Mentor.name) private MentorModel : Model<Mentor>){}


    async createMentor(createMentor : create_Mentor_Type){
        const mentor = new this.MentorModel({
            ...createMentor,
            createdAt:Date.now(),
            updatedAt : Date.now()
            
        })

        await mentor.save()
        return mentor;
    }


}
