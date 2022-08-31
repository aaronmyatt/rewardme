import PubSub from 'pubsub-js'
import { Reinforcement, StoreKeys, Topics } from '~/schemas'
import { store } from '~/composites/store'

PubSub.subscribe(Topics.REWARD_BEHAVIOUR, () => {
  const rawReinforcement = store.getItem(StoreKeys.REINFORCEMENT) || Reinforcement.parse({ count: 0 })
  const reinforcement = Reinforcement.parse(rawReinforcement)
  reinforcement.count = reinforcement.count + 1
  store.setItem(StoreKeys.REINFORCEMENT, reinforcement)
})
