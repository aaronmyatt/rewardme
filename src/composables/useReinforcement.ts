import PubSub from 'pubsub-js'
import useProfiles from '~/composables/useProfiles'
import { store } from '~/composites/store'
import { StoreKeys, Topics } from '~/schemas'
import type { IReinforcement } from '~/schemas'

export default function() {
  const { getActiveProfile } = useProfiles()
  const count = ref(0)

  onMounted(() => {
    setActiveUsersCount()
  })

  PubSub.subscribe(Topics.UPDATE_STORE, () => {
    setTimeout(() => {
      setActiveUsersCount()
    })
  })

  function setActiveUsersCount() {
    const profile = getActiveProfile.value
    const reinforcement: IReinforcement[] = store.getItem(StoreKeys.REINFORCEMENT)
    if (profile) {
      const usersReinforcement = reinforcement.filter(r => r.id === profile.id).reduce((p: number, c) => p + c.count, 0)
      count.value = usersReinforcement || 0
    }
  }

  return {
    count,
  }
}
