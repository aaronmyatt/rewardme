import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'

const rewards = ref([] as IReward[])

export default function() {
  onMounted(() => {
    rewards.value = store.getItem(StoreKeys.REWARDS) || []
  })
  return {
    rewards,
  }
}
