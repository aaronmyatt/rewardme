<script setup lang="ts">
import type { z } from 'zod'
import NewFormControls from '~/components/NewForm/Controls.vue'
import imageCache from '~/composites/imageCache'
import { Profile } from '~/schemas'

type ProfileType = z.infer<typeof Profile>

const emits = defineEmits(['submit'])

const profile = reactive({
  image: '',
  nickname: '',
  color: '',
  hobby: '',
  dateofbirth: '',
} as ProfileType)
const profileValid = ref(false)

const profileImage = ref()
const previewImage = ref()
const step = ref(1)
const nameError = ref('')

watch(profileImage, () => {
  const reader = new FileReader()
  reader.readAsDataURL(profileImage.value as Blob)
  reader.onload = async() => {
    await imageCache.setImage(profileImage.value.name, reader.result as string)
    previewImage.value = await imageCache.getImage(profileImage.value.name)
    profile.image = profileImage.value.name
  }
})

function onValidate() {
  nameError.value = ''
  const safeProfile = Profile.safeParse(profile)
  if (safeProfile.success) {
    profileValid.value = true
  }
  else {
    profileValid.value = true
    step.value = 1
    nameError.value = safeProfile.error.issues[0].message
  }
}

function onSubmit() {
  const safeProfile = Profile.safeParse(profile)
  if (profileValid.value && safeProfile.success)
    emits('submit', safeProfile.data)
}

function onReset() {
  profile.name = ''
  Object.assign(profile, {})
}

onUnmounted(() => {
  onReset()
})
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div>
        <DevJson :jsonable="profile" />
        <q-form
          ref="profileForm"
          class="relative"
          @reset="onReset"
        >
          <div>
            <q-stepper
              ref="stepper"
              v-model="step"
              header-nav
              vertical
              color="primary"
              animated
              @keydown.enter.prevent="$refs.stepper.next()"
              @transition="onValidate"
            >
              <q-step
                :name="1"
                title="What's your name?"
                icon="person_outline"
                :error="!!nameError"
              >
                <q-input
                  v-model="profile.name"
                  label="Name"
                  required
                  stack-label
                  autofocus
                  :error="!!nameError"
                  :error-message="nameError"
                />
                <NewFormControls :step="step" :back-func="() => $refs.stepper.previous()" :next-func="() => $refs.stepper.next()" />
              </q-step>

              <q-step
                :name="2"
                title="Do you have a nickname?"
                caption="Optional"
                icon="sentiment_very_satisfied"
              >
                <q-input
                  v-model="profile.nickname"
                  label="Nickname"
                  required
                  stack-label
                  autofocus
                />
                <NewFormControls :step="step" :back-func="() => $refs.stepper.previous()" :next-func="() => $refs.stepper.next()" />
              </q-step>

              <q-step
                :name="3"
                title="What's your favourite thing to do?"
                icon="attractions"
                caption="Optional"
              >
                <q-input v-model="profile.hobby" label="Hobby" stack-label autofocus />
                <NewFormControls :step="step" :back-func="() => $refs.stepper.previous()" :next-func="() => $refs.stepper.next()" />
              </q-step>
              <q-step
                :name="4"
                title="When is your birthday?"
                icon="event"
                class="flex justify-center"
                caption="Optional"
              >
                <q-date
                  v-model="profile.dateofbirth"
                  flat
                  minimal
                  :landscape="$q.screen.gt.sm"
                />
                <NewFormControls :step="step" :back-func="() => $refs.stepper.previous()" :next-func="() => $refs.stepper.next()" />
              </q-step>
              <q-step
                :name="5"
                title="What's your favourite colour?"
                caption="Optional"
                icon="palette"
                class="flex justify-center"
              >
                <div
                  :style="{
                    backgroundColor: profile.color + '70',
                    borderWidth: '5px',
                    borderColor: profile.color
                  }"
                >
                  <q-color v-model="profile.color" square w="300px" flat no-footer no-header default-view="palette" format-model="hex" />
                </div>
                <NewFormControls :step="step" :back-func="() => $refs.stepper.previous()" :next-func="() => $refs.stepper.next()" />
              </q-step>
              <q-step
                :name="6"
                title="Add a picture"
                caption="Optional"
                icon="photo_camera"
                class=""
              >
                <div class="flex justify-center space-y-2">
                  <q-img
                    class="w-1/2"
                    :src="previewImage"
                  />
                  <q-file v-model="profileImage" outlined>
                    <template #prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </div>
                <NewFormControls :step="step" :back-func="() => $refs.stepper.previous()" :next-func="() => $refs.stepper.next()" />
              </q-step>
            </q-stepper>
          </div>
          <div class="flex justify-end pt-4 space-x-2">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn
              v-if="profileValid" label="Submit" color="primary" @click="onSubmit" @keydown.enter.prevent.stop=""
            />
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>
