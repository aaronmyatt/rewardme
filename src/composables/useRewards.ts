import { useQuasar } from 'quasar'
import useProfile from './useProfiles'
import useReinforcement from '~/composables/useReinforcement'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'

const rewards = reactive([] as IReward[])
const totalClaimed = ref(0)

export default function() {
  const $q = useQuasar()
  const { count } = useReinforcement()
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

  const availablePoints = computed(() => count.value - totalClaimed.value)

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
    const sufficientPoints = availablePoints.value >= reward.milestone
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
    totalClaimed,
    rewards,
    deleteReward,
    claimReward,
    availablePoints,
  }
}
