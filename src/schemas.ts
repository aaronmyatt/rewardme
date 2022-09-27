import { z } from 'zod'
import { validate as uuidValidate, v4 as uuidv4 } from 'uuid'

export const Reward = z.object(
  {
    profile: z.string().refine(uuidValidate),
    createddate: z.string().default(new Date().toUTCString()),
    updateddate: z.string().default(new Date().toUTCString()),
    id: z.string().default(() => uuidv4()),
    name: z.string(),
    image: z.string().optional(), // as base64
    milestone: z.number().default(0),
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
    active: z.boolean().default(false),
    archived: z.boolean().default(false),
  },
)

export const Reinforcement = z.object({
  count: z.number().default(0),
  id: z.string(),
})

export enum Topics {
  REINFORCE_ALL='rm.reinforce',
  REWARD_BEHAVIOUR='rm.reinforce.increment',
  DISCOUNT_BEHAVIOUR='rm.reinforce.discount',
  PROFILE_CHANGED='rm.profile.changed',
}

export enum StoreKeys {
  REINFORCEMENT='rm.reinforcement',
  PROFILES='rm.profiles',
  REWARDS='rm.rewards',
}

export type IReinforcement = z.infer<typeof Reinforcement>
export type IProfile = z.infer<typeof Profile>
export type IReward = z.infer<typeof Reward>
export type AnyValidSchemaObject = IReinforcement | IReinforcement[] | IProfile | IProfile[] | IReward | IReward[]
