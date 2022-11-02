<template>
  <q-linear-progress :size="size || '25px'" :value="progress" :color="barColor" rounded>
    <div class="absolute-full flex flex-center">
      <q-badge color="white" :text-color="badgeColor" :label="label" />
    </div>
  </q-linear-progress>
</template>
<script setup lang="ts">
import useRewards from '~/composables/useRewards'

const props = defineProps({
  value: {
    default: 0,
  },
  size: {
    default: '25px',
  },
  label: String,
  barColor: {
    default: 'green',
  },
  badgeColor: {
    default: 'accent',
  },
})

const { availablePoints: count } = useRewards()

const progress = computed(() => {
  return count.value / props.value
})

const label = computed(() => {
  return props.label || `${count.value} / ${props.value}`
})
</script>
