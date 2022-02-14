import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'

export const Task = z.object(
  {
    createddate: z.string().default(new Date().toUTCString()),
    updateddate: z.string().default(new Date().toUTCString()),
    id: z.string().default(() => uuidv4()),
    done: z.boolean().default(false),
    name: z.string(),
  },
)

export const Reward = z.object(
  {
    createddate: z.string().default(new Date().toUTCString()),
    updateddate: z.string().default(new Date().toUTCString()),
    id: z.string().default(() => uuidv4()),
    name: z.string(),
    image: z.string().optional(), // as base64
    tasks: z.record(z.string(), Task).default({}),
    claimed: z.boolean().default(false),
  },
)

export const Profile = z.object(
  {
    createddate: z.string().default(new Date().toUTCString()),
    updateddate: z.string().default(new Date().toUTCString()),
    id: z.string().default(() => uuidv4()),
    name: z.string().refine(val => !!val.length),
    nickname: z.string().default(''),
    dateofbirth: z.string().default(''),
    hobby: z.string().default(''),
    color: z.string().default(''),
    image: z.string().optional(), // as base64
    rewards: z.record(z.string(), Reward).default({}),
  },
)

export const ProfileSummary = Profile.pick({
  id: true,
  name: true,
  nickname: true,
  image: true,
}).extend({
  archive: z.boolean().default(false),
})

export const ProfileSummaries = z.array(ProfileSummary)
