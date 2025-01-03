import { Schema, SchemaFactory,Prop } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Mentor } from "./mentor.schema";


export type mentor_ServiceDocument = HydratedDocument<Mentor_Service>

@Schema({
    timestamps : true
})
export class Mentor_Service{
    @Prop({
        required : true,
        index : true,
        trim : true,
        type:Types.ObjectId,
        ref:Mentor.name
    })
    mentor : Types.ObjectId


    @Prop({
        type:String,
        required:true
    })
    type:MentorServiceType

    @Prop({
        trim : true,
        maxlength: 20,
        minlength : 2
    })
    headline : string

    @Prop()
    about:string

    @Prop()
    description : string

    @Prop()
    cost : Number

}

export const Mentor_ServiceSchema = SchemaFactory.createForClass(Mentor_Service)