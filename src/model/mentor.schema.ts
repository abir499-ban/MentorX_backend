import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { User } from './user.schema'

export type MentorDocument = HydratedDocument<Mentor>

@Schema({
    timestamps : true
})
export class Mentor {
    @Prop({
        type:Types.ObjectId,
        index: true,
        ref: User.name,
        required:true,
    })
    userID: Types.ObjectId

    @Prop({
        trim: true,
        required: true,
        index: true
    })
    domain: string

    @Prop({
        required: true,
        index: true

    })
    company: string

    @Prop({
        required: true
    })
    position: string

    @Prop()
    about: string

    @Prop({
        type: {
            linkedIn : {type : String, required : true},
            github : {type : String},
            socials: { type: [String] },
            bio: { type: String },
            interests: { type: [String] },
            work: { type: [String] }
        }
    })
    metaData : MentorMetaData

}

export const MentorSchema = SchemaFactory.createForClass(Mentor)