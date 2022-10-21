<script setup lang="ts">
import MaleAvatar from '~icons/custom/MaleAvatar'
import FemaleAvatar from '~icons/custom/FemaleAvatar'

const profileImage = ref('female')

const interval = setInterval(() => {
  if (profileImage.value === 'male')
    profileImage.value = 'female'

  else
    profileImage.value = 'male'
}, 5000)

onUnmounted(() => {
  clearInterval(interval)
})

</script>
<template>
  <MaleAvatar v-if="profileImage === 'male'" class="w-full h-auto" />
  <FemaleAvatar v-else class="h-auto w-full" />
</template>
