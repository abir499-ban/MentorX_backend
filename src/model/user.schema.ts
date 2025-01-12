import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { string } from 'zod';

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

    @Prop({
        type:Boolean,
    })
    isVerified : boolean

    @Prop({
        type : String,
        max : 12,
        min : 7,
    })
    phone : string;

    @Prop({
        type : string,
        length : 4
    })
    graduationYear : string;

}

export const UserSchema =  SchemaFactory.createForClass(User)
