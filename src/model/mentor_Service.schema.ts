import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "./user.schema";


export type mentor_ServiceDocument = HydratedDocument<Mentor_Service>

@Schema({
    timestamps: true
})
export class Mentor_Service {
    @Prop({
        type: Types.ObjectId,
        index: true,
        ref: User.name,
        required: true,
    })
    userID: Types.ObjectId


    @Prop({
        type: String,
        required: true
    })
    type: MentorServiceType

    @Prop({
        trim: true,
        maxlength: 20,
        minlength: 2
    })
    headline: string

    @Prop()
    about: string

    @Prop()
    cost: Number

    @Prop(
        {
            type: [Types.ObjectId],
            index: true,
            ref: User.name,
        }
    )

    subscriber: Types.ObjectId[]
}

export const Mentor_ServiceSchema = SchemaFactory.createForClass(Mentor_Service)