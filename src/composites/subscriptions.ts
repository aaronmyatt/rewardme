import PubSub from 'pubsub-js'
import { StoreKeys, Topics } from '~/schemas'
import type { IReinforcement } from '~/schemas'
import { store } from '~/composites/store'

PubSub.subscribe(Topics.REWARD_BEHAVIOUR, (_, { id }) => {
  let reinforcements: IReinforcement[] = store.getItem(StoreKeys.REINFORCEMENT)
  const usersReinforcement = reinforcements.find(r => r.id === id)
  if (usersReinforcement) {
    reinforcements.map((r) => {
      if (r.id === id)
        r.count = r.count + 1
      return r
    })
  }
  else {
    reinforcements = [{ count: 1, id }, ...reinforcements]
  }
  store.setItem(StoreKeys.REINFORCEMENT, reinforcements)
})

PubSub.subscribe(Topics.DISCOUNT_BEHAVIOUR, (_, { id }) => {
  let reinforcements: IReinforcement[] = store.getItem(StoreKeys.REINFORCEMENT)
  const usersReinforcement = reinforcements.find(r => r.id === id)
  if (usersReinforcement) {
    reinforcements.map((r) => {
      if (r.id === id)
        r.count = r.count - 1
      return r
    })
  }
  else {
    reinforcements = [{ count: 1, id }, ...reinforcements]
  }
  store.setItem(StoreKeys.REINFORCEMENT, reinforcements)
})
