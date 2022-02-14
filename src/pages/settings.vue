<script setup lang="ts">
import type { z } from 'zod'
import { Profile } from '~/schemas'
import { useProfiles } from '~/stores/profiles'

type ProfileType = z.infer<typeof Profile>
const profileStore = useProfiles()
const router = useRouter()

function onSubmit(profile: ProfileType) {
  const safeProfile = Profile.safeParse(profile)
  if (safeProfile.success) {
    Object.assign(profileStore.active, safeProfile.data)
    router.push('/profiles')
  }
}

</script>

<template>
  <div class="md:w-1/2 mx-auto">
    <q-toolbar>
      <q-toolbar-title>
        Settings
      </q-toolbar-title>
    </q-toolbar>
    <q-card flat>
      <q-card-section>
        <q-toolbar class="text-white bg-primary">
          <q-toolbar-title>
            Current Profile
          </q-toolbar-title>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <ProfileForm v-if="profileStore.profiles.length > 0" :model-value="profileStore.active" @submit="onSubmit" />
      </q-card-section>
    </q-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
