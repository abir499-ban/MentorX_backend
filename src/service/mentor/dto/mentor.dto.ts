import {z} from 'zod'

export const createMentorDTO = z.object({
    userID : z.string().regex(/^[0-9a-fA-F]{24}$/),
    domain : z.string(),
    company : z.string(),
    position : z.string()
})

export const MentorMetaDataSchema = z.object({
    bio: z.string().optional(),
    socials: z.array(z.string()).optional(),
    interests: z.array(z.string()).optional(),
    work: z.array(z.string()).optional(),
  });

export const updateMentorDTO = z.object({
    id : z.string(),
    domain : z.string().optional(),
    company : z.string().optional(),
    position : z.string().optional(),
    about : z.string().optional(),
    metaData : MentorMetaDataSchema.optional()
})





export type  create_Mentor_Type = z.infer<typeof createMentorDTO>
export type update_Mentor_Type = z.infer<typeof updateMentorDTO>