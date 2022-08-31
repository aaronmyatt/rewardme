<script setup lang="ts">
import useProfiles from '~/composables/useProfiles'
import type { IProfile } from '~/schemas'

const router = useRouter()
const { setActiveProfile, profiles } = useProfiles()
function onSubmit(profile: IProfile) {
  profiles.push(profile)
  setActiveProfile(profile)
  router.push('/profiles')
}

</script>

<template>
  <div class="w-full md:w-1/2 mx-auto">
    <q-toolbar>
      <q-toolbar-title>
        New Profile
      </q-toolbar-title>
    </q-toolbar>

    <NewProfileForm @submit="onSubmit" />
  </div>
</template>
