import PubSub from 'pubsub-js'
import { store } from '~/composites/store'
import { Reinforcement, StoreKeys, Topics } from '~/schemas'

export default function() {
  const count = ref(0)
  onMounted(() => {
    const reinforcement = Reinforcement.parse(store.getItem(StoreKeys.REINFORCEMENT))
    count.value = reinforcement.count
  })

  PubSub.subscribe(Topics.REWARD_BEHAVIOUR, () => {
    setTimeout(() => {
      const reinforcement = Reinforcement.parse(store.getItem(StoreKeys.REINFORCEMENT))
      count.value = reinforcement.count
    })
  })

  return {
    count,
  }
}
