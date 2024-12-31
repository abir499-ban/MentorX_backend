import {z} from 'zod'

export const createMentorDTO = z.object({
    userID : z.string(),
    domain : z.string(),
    company : z.string(),
    position : z.string()
})




export type  create_Mentor_Type = z.infer<typeof createMentorDTO>