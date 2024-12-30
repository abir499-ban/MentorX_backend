import * as dotenv from 'dotenv'
dotenv.config();


export const JwtConfig = {
    global: true,
    secret: process.env.TOKEN_SECRET,
    signOptions: { expiresIn: '24h' },
}