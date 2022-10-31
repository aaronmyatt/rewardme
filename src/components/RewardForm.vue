<script setup lang="ts">
import { useQuasar } from 'quasar'
import imageCache from '~/composites/imageCache'
import { Reward } from '~/schemas'
import type { IReward } from '~/schemas'
import useProfiles from '~/composables/useProfiles'
const $q = useQuasar()
const router = useRouter()

const { getActiveProfile } = useProfiles()
const props = defineProps<{
  modelValue?: IReward
}>()
const emits = defineEmits(['submit'])
const reward = reactive(props.modelValue || {} as IReward)

onMounted(() => {
  const activeProfile = getActiveProfile.value
  if (activeProfile && activeProfile.id) {
    Object.assign(reward, {
      ...reward,
      profile: activeProfile.id,
      claimed: false,
    })
  }
  else {
    $q.notify({
      type: 'warning',
      caption: 'Please add or activate a profile first',
      timeout: 0,
      closeBtn: true,
      actions: [
        { label: 'Go to Profiles', handler: () => router.push('/profiles') },
      ],
    })
  }
})

const rewardImage = ref()
const previewImage = ref()

watch(rewardImage, () => {
  const reader = new FileReader()
  reader.readAsDataURL(rewardImage.value as Blob)
  reader.onload = async() => {
    await imageCache.setImage(rewardImage.value.name, reader.result as string)
    reward.image = rewardImage.value.name
  }
})

watchEffect(async() => {
  if (reward.image)
    previewImage.value = await imageCache.getImage(reward.image)
})

function onSubmit() {
  const safeReward = Reward.safeParse(reward)
  if (safeReward.success)
    emits('submit', safeReward.data)
}

function onReset() {
  Object.assign(reward, Reward.parse(props.modelValue))
  rewardImage.value = null
  previewImage.value = null
}
</script>
<template>
  <q-card flat>
    <q-card-section>
      <div>
        <DevJson :jsonable="reward" />
        <q-form
          class="q-gutter-md"
          @submit="onSubmit"
          @reset="onReset"
        >
          <q-input v-model="reward.name" label="What is this reward?" required standout="bg-primary text-secondary" />
          <q-input v-model.number="reward.milestone" type="number" label="Target" required standout="bg-primary text-secondary" hint="How many points are needed to achieve this reward?" />
          <q-file v-model="rewardImage" label="A picture of the reward" standout="bg-primary text-secondary">
            <template #prepend>
              <q-icon name="attach_file" />
            </template>
            <template #append>
              <q-avatar square size="90px">
                <q-img
                  :src="previewImage"
                />
              </q-avatar>
            </template>
          </q-file>
          <q-checkbox v-model="reward.claimed" label="Have they received this reward already?" />
          <div class="flex justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>
