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
    rewards.map((r) => {
      if (r.id === reward.id)
        r.archived = !r.archived

      return r
    })
    store.setItem(StoreKeys.REWARDS, rewards)
    $q.notify({
      type: 'negative',
      message: 'Reward Deleted',
    })
  }

  function invalidClaim(reward: IReward) {
    const availablePoints = (count.value - totalClaimed.value)
    const sufficientPoints = availablePoints >= reward.milestone
    if (sufficientPoints)
      return

    $q.notify({
      type: 'negative',
      message: 'You need to earn more reward points.',
    })

    return true
  }

  function claimReward(reward: IReward) {
    if (invalidClaim(reward)) {
      if (!reward.claimed) // insufficient points, but they wanna reset a previous claim
        return
    }

    rewards.map((r) => {
      if (r.id === reward.id)
        r.claimed = !r.claimed

      return r
    })

    store.setItem(StoreKeys.REWARDS, rewards)
    $q.notify({
      type: reward.claimed ? 'positive' : 'warning',
      message: reward.claimed ? 'Reward Claimed' : 'Reward Reset',
    })
  }

  return {
    rewards,
    deleteReward,
  }
}
