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
  const activeProfile = getActiveProfile()
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
        <ProfileForm v-if="profile" :model-value="profile" @submit="onSubmit" />
      </q-card-section>
    </q-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
