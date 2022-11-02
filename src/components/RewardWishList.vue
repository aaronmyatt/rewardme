<template>
  <div class="text-primary grid grid-cols-2 md:grid-cols-3 gap-6">
    <slot />
    <RewardCard
      v-for="reward in sortedRewards"
      :key="reward.id"
      :reward="reward"
      class="w-full cursor-pointer hover:shadow-xl"
      :show-progress="false"
      :editable="false" @click="() => setAsGoal(reward)"
    />
  </div>
</template>
<script setup lang="ts">
import useRewards from '~/composables/useRewards'
import RewardCard from '~/components/RewardCard.vue'
import type { IReward } from '~/schemas'

const { setAsGoal } = useRewards()

const props = defineProps<{
  rewards: IReward[]
}>()

function byDateKey(dateKey: keyof Pick<IReward, 'updateddate' | 'createddate'>) {
  return (first: IReward, second: IReward) => {
    return (new Date(second[dateKey])).valueOf() - (new Date(first[dateKey]).valueOf())
  }
}

const sortedRewards = computed(() => props.rewards.filter(r => !r.claimed).sort(byDateKey('updateddate')))
</script>
