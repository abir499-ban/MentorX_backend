import {z} from 'zod'

export const payload_DTO = z.object({
    username : z.string(),
    password : z.string()
})




export type  payload_DTO_Type = z.infer<typeof payload_DTO>