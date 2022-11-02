import { useQuasar } from 'quasar'
import useProfile from './useProfiles'
import useReinforcement from '~/composables/useReinforcement'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'

const rewards = reactive([] as IReward[])

export default function() {
  const $q = useQuasar()
  const { count } = useReinforcement()
  const { getActiveProfile } = useProfile()

  const totalClaimed = computed(() => rewards.reduce((p: number, c) => {
    if (c.claimed)
      return p + c.milestone

    return p
  }, 0))
  const availablePoints = computed(() => count.value - totalClaimed.value)
  const currentGoal = computed(() => rewards.find(r => r.active && !r.claimed))

  onMounted(() => {
    const activeProfile = getActiveProfile.value
    if (activeProfile) {
      const allRewards: IReward[] = store.getItem(StoreKeys.REWARDS) || []
      const usersRewards = allRewards.filter((reward) => {
        return reward.profile === activeProfile.id
      })
      Object.assign(rewards, usersRewards)
    }
  })

  whenever(getActiveProfile, () => {
    const allRewards: IReward[] = store.getItem(StoreKeys.REWARDS) || []
    const usersRewards = allRewards.filter((reward) => {
      return reward.profile === getActiveProfile.value?.id
    })
    Object.assign(rewards, usersRewards)
  })

  watch(rewards, (curr) => {
    store.setItem(StoreKeys.REWARDS, curr)
  })

  function deleteReward(reward: IReward) {
    rewards.map((r) => {
      if (r.id === reward.id)
        r.archived = !r.archived

      return r
    })
    $q.notify({
      type: 'negative',
      message: 'Reward Deleted',
    })
  }

  function claimable(reward: IReward) {
    const sufficientPoints = availablePoints.value >= reward.milestone
    if (sufficientPoints)
      return true
    return false
  }

  function claimReward(reward: IReward) {
    if (!claimable(reward)) {
      if (!reward.claimed) {
        return
      } // insufficient points, but they wanna reset a previous claim
      else {
        $q.notify({
          type: 'negative',
          message: 'You need to earn more reward points.',
        })
      }
    }

    rewards.map((r) => {
      if (r.id === reward.id)
        r.claimed = !r.claimed

      return r
    })

    $q.notify({
      type: reward.claimed ? 'positive' : 'warning',
      message: reward.claimed ? 'Reward Claimed' : 'Reward Reset',
    })
  }

  function setAsGoal(reward: IReward) {
    rewards.map((r) => {
      r.active = r.id === reward.id
      return r
    })

    $q.notify({
      type: 'positive',
      message: 'Reward Goal Updated',
    })
  }

  return {
    totalClaimed,
    rewards,
    deleteReward,
    claimReward,
    availablePoints,
    claimable,
    goal: currentGoal,
    setAsGoal,
  }
}
