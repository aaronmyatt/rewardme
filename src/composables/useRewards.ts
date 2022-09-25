import { useQuasar } from 'quasar'
import useProfile from './useProfiles'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'

const rewards = ref([] as IReward[])

export default function() {
  const $q = useQuasar()
  const { getActiveProfile } = useProfile()
  onMounted(() => {
    const activeProfile = getActiveProfile()
    if (activeProfile) {
      const allRewards: IReward[] = store.getItem(StoreKeys.REWARDS) || []
      rewards.value = allRewards.filter((reward) => {
        return reward.profile === activeProfile.id
      })
    }
  })

  function deleteReward(reward: IReward) {
    rewards.value = rewards.value.filter((r: IReward) => r.id !== reward.id)
    store.setItem(StoreKeys.REWARDS, rewards.value)
    $q.notify({
      type: 'negative',
      message: 'Reward Deleted',
    })
  }
  return {
    rewards,
    deleteReward,
  }
}
