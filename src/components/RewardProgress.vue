<template>
  <q-linear-progress :size="size || '25px'" :value="progress" color="accent">
    <div class="absolute-full flex flex-center">
      <q-badge color="white" text-color="accent" :label="label" />
    </div>
  </q-linear-progress>
</template>
<script setup lang="ts">
import useReinforcement from '~/composables/useReinforcement'
import type { IReward } from '~/schemas'

const props = defineProps<{
  reward: IReward
  size?: String
}>()

const { count } = useReinforcement()

const progress = computed(() => {
  return count.value / props.reward.milestone
})

const label = computed(() => {
  return `${Math.round(count.value / props.reward.milestone * 100)}%`
})
</script>
