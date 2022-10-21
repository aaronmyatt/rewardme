<script setup lang="ts">
import useActiveProfileImage from '~/composables/useActiveProfileImage'

const { profileImage } = useActiveProfileImage()
</script>
<template>
  <div>
    <q-img
      v-if="profileImage !== undefined"
      class="rounded-full"
      ratio="1"
      :src="profileImage"
    />
    <q-img v-else ratio="1">
      <DefaultAvatar class="rounded-full" />
    </q-img>

    <!-- So we can nest, for example, q-menu inside neatly -->
    <slot />
  </div>
</template>
