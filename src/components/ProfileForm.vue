<script setup lang="ts">
import type { z } from 'zod'
import imageCache from '~/composites/imageCache'
import { Profile } from '~/schemas'
type ProfileType = z.infer<typeof Profile>

const props = defineProps({
  modelValue: {
    default: {
      image: '',
      nickname: '',
      color: '',
      hobby: '',
      dateofbirth: '',
    } as ProfileType,
  },
})
const emits = defineEmits(['submit'])

const profile = reactive(Object.assign({}, props.modelValue))

const profileImage = ref()
const previewImage = ref()

watch(profileImage, () => {
  const reader = new FileReader()
  reader.readAsDataURL(profileImage.value as Blob)
  reader.onload = async() => {
    await imageCache.setImage(profileImage.value.name, reader.result as string)
    previewImage.value = await imageCache.getImage(profileImage.value.name)
    profile.image = profileImage.value.name
  }
})

function onSubmit() {
  const safeProfile = Profile.safeParse(profile)
  if (safeProfile.success)
    emits('submit', safeProfile.data)
}

function onReset() {
  profile.name = ''
  Object.assign(profile, props.modelValue)
}

onUnmounted(() => {
  onReset()
})

const profileForm = ref(undefined)
const calendartrigger = ref(undefined)
const colortrigger = ref(undefined)
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div>
        <DevJson :jsonable="profile" />
        <q-form
          ref="profileForm"
          class="space-y-2"
          @reset="onReset"
          @submit="onSubmit"
        >
          <q-input v-model="profile.name" label="Name" required stack-label />
          <q-input v-model="profile.nickname" label="Nickname" stack-label />
          <q-input v-model="profile.hobby" label="Hobby" stack-label />

          <q-input
            ref="calendartrigger"
            model-value=""
            stack-label
            :placeholder="profile.dateofbirth"
            label="Birthday"
            class="my-input"
          >
            <template #append>
              <carbon-calendar />
            </template>
          </q-input>
          <q-input
            ref="colortrigger"
            v-model="profile.color"
            :style="{'backgroundColor': profile.color + 80}"
            label="Favourite Color"
            filled
            class="my-input"
          >
            <template #append>
              <carbon-color-palette />
            </template>
          </q-input>
          <q-file v-model="profileImage" outlined>
            <template #prepend>
              <q-icon name="attach_file" />
            </template>
            <template #append>
              <q-avatar size="50px">
                <q-img
                  :src="previewImage"
                />
              </q-avatar>
            </template>
          </q-file>

          <div class="flex justify-end pt-4 space-x-2">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" color="primary" />
          </div>
        </q-form>

        <q-popup-proxy touch-position :target="calendartrigger" transition-show="scale" transition-hide="scale">
          <q-date
            v-model="profile.dateofbirth"
            title="When is your birthday?"
          />
        </q-popup-proxy>

        <q-popup-proxy touch-position :target="colortrigger" transition-show="scale" transition-hide="scale">
          <q-color v-model="profile.color" w="300px" no-footer no-header default-view="palette" format-model="hex" />
        </q-popup-proxy>
      </div>
    </q-card-section>
  </q-card>
</template>
