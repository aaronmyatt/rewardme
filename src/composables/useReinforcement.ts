import PubSub from 'pubsub-js'
import useProfiles from '~/composables/useProfiles'
import { store } from '~/composites/store'
import { StoreKeys, Topics } from '~/schemas'
import type { IReinforcement } from '~/schemas'
const { getActiveProfile } = useProfiles()

export default function() {
  const count = ref(0)

  onMounted(() => {
    const profile = getActiveProfile()
    const reinforcement: IReinforcement[] = store.getItem(StoreKeys.REINFORCEMENT)
    if (profile) {
      const usersReinforcement = reinforcement.find(r => r.id === profile.id)
      count.value = (usersReinforcement && usersReinforcement.count) || 0
    }
  })

  PubSub.subscribe(Topics.REINFORNCE_ALL, () => {
    setTimeout(() => {
      const profile = getActiveProfile()
      const reinforcement: IReinforcement[] = store.getItem(StoreKeys.REINFORCEMENT)
      if (profile) {
        const usersReinforcement = reinforcement.find(r => r.id === profile.id)
        count.value = (usersReinforcement && usersReinforcement.count) || 0
      }
    })
  })

  return {
    count,
  }
}
