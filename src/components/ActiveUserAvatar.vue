<script setup lang="ts">
import useActiveProfileImage from '~/composables/useActiveProfileImage'

const { profileImage } = useActiveProfileImage()
</script>
<template>
  <div>
    <q-avatar>
      <q-img
        v-if="profileImage !== undefined"
        :src="profileImage"
      />
      <DefaultAvatar v-else />
    </q-avatar>

    <!-- So we can nest, for example, q-menu inside neatly -->
    <slot />
  </div>
</template>
