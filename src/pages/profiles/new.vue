<script setup lang="ts">
import type { z } from 'zod'
import { Profile } from '~/schemas'
import { useProfiles } from '~/stores/profiles'

type ProfileType = z.infer<typeof Profile>
const router = useRouter()
const profileStore = useProfiles()

function onSubmit(profile: ProfileType) {
  const safeProfile = Profile.safeParse(profile)
  if (safeProfile.success) {
    profileStore.storeNewProfile(safeProfile.data)
    profileStore.setActiveProfile(safeProfile.data)
    router.push('/')
  }
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
