<template>
  <q-list separator class="bg-secondary text-primary">
    <q-item
      v-for="reward in sortedRewards"
      :key="reward.id"
      tag="label"
      :to="{name: 'rewards-rewardid', params: {
        rewardid: reward.id
      }}"
    >
      <q-item-section v-if="reward.image" avatar>
        <img :src="reward.image && rewardImages[reward.image]" alt="" w="50px">
      </q-item-section>
      <q-item-section>
        <q-item-label>
          {{ reward.name }} <LastUpdated :date="reward.updateddate" />
        </q-item-label>
        <q-item-label caption>
          <RewardProgress m="t-2" class="mt-2" :reward="reward" size="20px" />
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <carbon-chevron-right text="xl" font="bold" class="text-primary" />
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script setup lang="ts">
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

const sortedRewards = [...props.rewards] // copy before mutating
  .sort(byDateKey('updateddate'))
</script>
