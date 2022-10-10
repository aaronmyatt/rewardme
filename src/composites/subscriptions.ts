import PubSub from 'pubsub-js'
import { Notify, debounce } from 'quasar'
import { Reinforcement, StoreKeys, Topics } from '~/schemas'
import type { IReinforcement } from '~/schemas'
import { store } from '~/composites/store'

const countChangeNotifications = (count: number) => Notify.create({
  type: count > 0 ? 'positive' : 'negative',
  message: count > 0 ? `You earned ${count} points` : `You lost ${Math.abs(count)} points`,
})

function queueReinforcement() {
  let count = 0
  const restrictedNotify = debounce((id) => {
    PubSub.publish(Topics.UPDATE_STORE, { id, count })
    count = 0
  }, 500)

  return (id: string, dec = false) => {
    if (dec)
      count--
    else
      count++
    restrictedNotify(id)
  }
}
const queueChange = queueReinforcement()

PubSub.subscribe(Topics.REWARD_BEHAVIOUR, (_, { id }) => {
  queueChange(id)
})

PubSub.subscribe(Topics.DISCOUNT_BEHAVIOUR, (_, { id }) => {
  queueChange(id, true)
})

PubSub.subscribe(Topics.UPDATE_STORE, (_, data) => {
  const reinforcements: IReinforcement[] = store.getItem(StoreKeys.REINFORCEMENT)
  reinforcements.push(Reinforcement.parse(data))
  store.setItem(StoreKeys.REINFORCEMENT, reinforcements)
  countChangeNotifications(data.count)
})
