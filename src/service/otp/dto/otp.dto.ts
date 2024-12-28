import {z} from 'zod'

export const createOTP_DtO = z.object({
    email : z.string().email()
})

export const verfiyOTP_DTO = z.object({
    email : z.string().email(),
    otp : z.string().trim()
})


export type  OtpDTO = z.infer<typeof createOTP_DtO>
export type Otp_verifyDTO = z.infer<typeof verfiyOTP_DTO>