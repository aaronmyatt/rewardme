import PubSub from 'pubsub-js'
import useProfiles from '~/composables/useProfiles'
import { store } from '~/composites/store'
import { StoreKeys, Topics } from '~/schemas'
import type { IReinforcement } from '~/schemas'

export default function() {
  const { getActiveProfile } = useProfiles()
  const count = ref(0)
  const history = reactive([] as IReinforcement[])

  onMounted(() => {
    Object.assign(history, store.getItem(StoreKeys.REINFORCEMENT))
    setActiveUsersCount()
    PubSub.subscribe(Topics.UPDATE_STORE, () => {
      setTimeout(() => {
        Object.assign(history, store.getItem(StoreKeys.REINFORCEMENT))
        setActiveUsersCount()
      })
    })
  })

  function setActiveUsersCount() {
    const profile = getActiveProfile.value
    if (profile) {
      const usersReinforcement = history.filter(r => r.id === profile.id).reduce((p: number, c) => p + c.count, 0)
      count.value = usersReinforcement || 0
    }
  }

  return {
    count,
    history,
  }
}
