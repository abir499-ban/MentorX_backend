import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { User } from './user.schema'

export type MentorDocument = HydratedDocument<Mentor>

@Schema()
export class Mentor{
    @Prop({
        index:true,
        trim:true,
        ref:User.name
    })
    userID : Types.ObjectId

    @Prop({
        trim:true,
        required : true,
        index:true
    })
    domain : string

    @Prop({
        required: true,
        index : true

    })
    company : string

    @Prop({
        required : true
    })
    position : string

    @Prop()
    about: string

    @Prop()
    metaData : MentorMetaData

    @Prop()
    createdAt : Date;

    @Prop()
    updatedAt : Date;
    
}

export const MentorSchema = SchemaFactory.createForClass(Mentor)