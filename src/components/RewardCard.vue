<script setup lang="ts">
import type { IReward } from '~/schemas'
import useRewards from '~/composables/useRewards'

const { claimReward } = useRewards()

interface Props {
  reward: IReward
  rewardImage?: string
  editable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
})

</script>

<template>
  <q-card>
    <q-card-section class="p-0">
      <q-img
        :ratio="16/9"
        :src="rewardImage"
        spinner-color="primary"
        spinner-size="82px"
      >
        <div class="text-2xl absolute bottom-0 left-0 text-left capitalize reward-name-container space-x-4 flex">
          <div class="name">
            {{ reward.name }}
          </div>
          <carbon-star v-if="reward.claimed" class="claimed text-yellow-400 fill-yellow-400" />
        </div>
      </q-img>
    </q-card-section>
    <q-card-section>
      <q-btn
        v-if="props.editable"
        class="absolute top-0 right-0 -translate-y-8"
        fab-mini
        color="primary"
        :to="{
          name: 'rewards-rewardid-edit',
          params: {
            rewardid: props.reward.id
          }
        }"
      >
        <carbon-edit />
      </q-btn>
      <q-btn class="w-full" padding="0px" flat @click="claimReward(reward)">
        <RewardProgress
          :value="reward.milestone"
          :label="reward.claimed ? 'Reset' : 'Redeem'" size="30px"
          :bar-color="reward.claimed ? 'accent' : 'green'"
          :badge-color="reward.claimed ? 'green' : 'accent'"
        />
      </q-btn>
    </q-card-section>
  </q-card>
</template>