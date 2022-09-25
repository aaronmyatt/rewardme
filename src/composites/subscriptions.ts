import PubSub from 'pubsub-js'
import { Notify, debounce } from 'quasar'
import { StoreKeys, Topics } from '~/schemas'
import type { IReinforcement } from '~/schemas'
import { store } from '~/composites/store'

function queueReinforcementNotification() {
  let count = 0
  const restrictedNotify = debounce(() => {
    Notify.create({
      type: count > 0 ? 'positive' : 'negative',
      message: count > 0 ? `You earned ${count} points` : `You lost ${Math.abs(count)} points`,
    })
    count = 0
  }, 500)

  return (dec = false) => {
    if (dec)
      count--
    else
      count++
    restrictedNotify()
  }
}
const notify = queueReinforcementNotification()

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
  notify()
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
  notify(true)
  store.setItem(StoreKeys.REINFORCEMENT, reinforcements)
})
