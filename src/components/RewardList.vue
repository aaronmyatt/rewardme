<template>
  <div class="text-primary grid grid-cols-2 md:grid-cols-3 gap-3">
    <RewardCard v-for="reward in sortedRewards" :key="reward.id" :reward="reward" :reward-image="reward.image && rewardImages[reward.image]" class="w-full" />
  </div>
</template>
<script setup lang="ts">
import RewardCard from '~/components/RewardCard.vue'
import imageCache from '~/composites/imageCache'
import type { IReward } from '~/schemas'

const props = defineProps<{
  rewards: IReward[]
}>()

const rewardImages = ref({} as Record<string, string>)

props.rewards
  .map(async(reward: IReward): Promise<void> => {
    if (reward.image !== undefined) {
      const image = await imageCache.getImage(reward.image)
      if (image) rewardImages.value[reward.image] = image
    }
  })

function byDateKey(dateKey: keyof Pick<IReward, 'updateddate' | 'createddate'>) {
  return (first: IReward, second: IReward) => {
    return (new Date(second[dateKey])).valueOf() - (new Date(first[dateKey]).valueOf())
  }
}

const sortedRewards = Object.assign(props.rewards, [...props.rewards]
  .sort(byDateKey('updateddate')))
</script>
