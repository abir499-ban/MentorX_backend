import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User{
    @Prop()
    firstName : string;

    @Prop()
    lastName : string;

    @Prop()
    email : string;

    @Prop()
    password : string;

    @Prop()
    otp : string

    @Prop()
    otpExpiry : Date;

    @Prop()
    createdAt : Date;

    @Prop()
    updatedAt : Date;

}

export const UserSchema =  SchemaFactory.createForClass(User)
