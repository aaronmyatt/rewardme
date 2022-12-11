<script setup lang="ts">
import { useQuasar } from 'quasar'
import useProfiles from '~/composables/useProfiles'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IProfile } from '~/schemas'
const { getActiveProfile } = useProfiles()
const $q = useQuasar()

const profile = ref<IProfile>()

onMounted(() => {
  const activeProfile = getActiveProfile.value
  if (activeProfile)
    profile.value = activeProfile
})

const router = useRouter()

function onSubmit(profile: IProfile) {
  const profiles = store.getItem(StoreKeys.PROFILES) || []
  const updatedProfiles = profiles.filter((p: IProfile) => p.id !== profile.id)
  updatedProfiles.push(profile)
  store.setItem(StoreKeys.PROFILES, updatedProfiles)

  $q.notify({
    type: 'positive',
    message: 'Profile Updated',
  })
}

</script>

<template>
  <q-page class="xl:w-2/3 md:mx-auto space-y-2">
    <Banner>
      <h1 class="font-bold text-2xl sm:text-3xl">
        Settings
      </h1>
      <p class="text-base sm:text-lg">
        Manage profiles and other configurable aspects of your Reward Me app here
      </p>
    </Banner>
    <q-card flat>
      <q-card-section>
        <q-toolbar class="text-white bg-primary">
          <q-toolbar-title>
            Profile
          </q-toolbar-title>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <ProfileForm v-if="profile" :model-value="profile" @submit="onSubmit" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
