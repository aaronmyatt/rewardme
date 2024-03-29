<script setup lang="ts">
import { useQuasar } from 'quasar'
import imageCache from '~/composites/imageCache'
import type { IReward } from '~/schemas'
import useRewards from '~/composables/useRewards'

const $q = useQuasar()

const { claimReward, availablePoints, claimable } = useRewards()

interface Props {
  reward: IReward
  editable?: boolean
  horizontal?: boolean
  showProgress?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  showProgress: true,
})
const rewardImage = ref('')

watchEffect(async() => {
  if (props.reward.image !== undefined) {
    const image = await imageCache.getImage(props.reward.image)
    if (image) rewardImage.value = image
  }
})

const untilClaimable = computed(() => {
  const milestone = props.reward.milestone
  const until = availablePoints.value > milestone ? milestone : availablePoints.value
  return `${until} / ${milestone}`
})
</script>

<template>
  <q-card class="rounded-xl">
    <q-card-section :horizontal="horizontal" class="p-0">
      <q-btn
        v-if="editable"
        class="absolute right-0 z-50 rounded-none rounded-tr-xl"
        :fab-mini="$q.screen.lt.sm"
        :fab="$q.screen.gt.xs"
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
      <q-card-section class="col-4" :class="{'p-0': !horizontal}">
        <q-img
          class="rounded-xl"
          :ratio="1"
          :src="rewardImage"
          spinner-color="primary"
          spinner-size="82px"
          :class="{'rounded-b-none': reward.claimed}"
        >
          <div v-if="!horizontal" class="text-xs sm:text-base md:text-xl absolute bottom-0 left-0 text-left capitalize">
            <div class="space-x-4 flex">
              <div class="name">
                {{ reward.name }}
              </div>
              <carbon-star v-if="reward.claimed" class="claimed text-yellow-400 fill-yellow-400" />
            </div>
            <div v-if="showProgress" class="text-base md:text-xl">
              {{ untilClaimable }}
            </div>
          </div>
        </q-img>
      </q-card-section>
      <q-card-section v-if="horizontal" class="col-8 flex items-center p-0">
        <div class="text-xl md:text-2xl text-left capitalize reward-name-container">
          <div class="space-x-4 flex">
            <div class="name">
              {{ reward.name }}
            </div>
            <carbon-star v-if="reward.claimed" class="claimed text-yellow-400 fill-yellow-400" />
          </div>
          <div class="text-base md:text-xl">
            {{ untilClaimable }}
          </div>
        </div>
      </q-card-section>
    </q-card-section>
    <q-card-section v-if="showProgress" :class="{'p-0 rounded-b-xl': horizontal}">
      <q-btn v-if="claimable(reward)" class="w-full" padding="0px" flat @click="() => claimReward(reward)">
        <RewardProgress
          :value="reward.milestone"
          :label="reward.claimed ? 'Reset' : 'Redeem'" size="30px"
          :bar-color="reward.claimed ? 'accent' : 'green'"
          :badge-color="reward.claimed ? 'green' : 'accent'"
        />
      </q-btn>
      <RewardProgress
        v-else
        :value="reward.milestone"
        :label="reward.claimed ? 'Reset' : ''"
        size="30px"
        :bar-color="reward.claimed ? 'accent' : 'green'"
        :badge-color="reward.claimed ? 'green' : 'accent'"
      />
    </q-card-section>
  </q-card>
</template>
