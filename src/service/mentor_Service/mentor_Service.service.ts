import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mentor_Service } from 'src/model/mentor_Service.schema';

@Injectable()
export class Mentor_ServiceService {
    constructor(@InjectModel(Mentor_Service.name) private readonly MentorServiceModel: Model<Mentor_Service>) { }

    async createService(createServiceDTO: Mentor_Service) {
        await this.MentorServiceModel.create(
            createServiceDTO
        )
    }

    async findService(id: string) {
        return await this.MentorServiceModel.findById(id)
    }

    async updateService(id: string, updateServiceDTO: Mentor_Service) {
        return await this.MentorServiceModel.findByIdAndUpdate(id, updateServiceDTO);
    }
}
