import { useQuasar } from 'quasar'
import useProfile from './useProfiles'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'

const rewards = reactive([] as IReward[])
const totalClaimed = ref(0)

export default function() {
  const $q = useQuasar()
  const { getActiveProfile } = useProfile()
  onMounted(() => {
    const activeProfile = getActiveProfile()
    if (activeProfile) {
      const allRewards: IReward[] = store.getItem(StoreKeys.REWARDS) || []
      const usersRewards = allRewards.filter((reward) => {
        return reward.profile === activeProfile.id
      })
      Object.assign(rewards, usersRewards)

      totalClaimed.value = rewards.reduce((p: number, c) => {
        if (c.claimed)
          return p + c.milestone

        return p
      }, 0)
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
