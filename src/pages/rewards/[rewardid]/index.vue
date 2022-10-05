<script setup lang="ts">
import imageCache from '~/composites/imageCache'
import type { IReward } from '~/schemas'
import useRewards from '~/composables/useRewards'

const props = defineProps({
  rewardid: {
    type: String,
    required: true,
  },
})
const router = useRouter()
const { rewards, deleteReward: delReward } = useRewards()
const reward = ref<IReward>()
const rewardImage = ref()
const confirmDelete = ref(false)

onMounted(() => {
  const matchingReward = rewards.value.find(reward => reward.id === props.rewardid)
  if (matchingReward) {
    matchingReward.image && imageCache.getImage(matchingReward.image).then((image) => {
      rewardImage.value = image
    })
    reward.value = matchingReward
  }

  else { router.push('/rewards') }
})

function deleteReward() {
  reward.value && delReward(reward.value)
  router.push('/rewards')
}

</script>

<template>
  <q-page>
    <div class="flex flex-col items-center">
      <q-card v-if="reward" class="w-full md:w-2/3 xl:w-1/2">
        <q-card-section>
          <q-img
            :ratio="16/9"
            :src="rewardImage"
            spinner-color="primary"
            spinner-size="82px"
          >
            <div class="text-2xl absolute bottom-0 left-0 text-left capitalize reward-name-container space-x-4">
              <div class="name">
                {{ reward.name }}
              </div>
              <carbon-star v-if="reward.claimed" class="claimed" text="yellow-400" />
            </div>
          </q-img>
          <q-btn
            fab
            color="primary"
            class="absolute"
            style="bottom: 20px; right: 12px; transform: translateY(-50%);"
            :to="{
              name: 'rewards-rewardid-edit',
              params: {
                rewardid: props.rewardid
              }
            }"
          >
            <carbon-edit />
          </q-btn>
          <RewardProgress class="mt-2" :reward="reward" />
        </q-card-section>
      </q-card>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18,18]" expand>
      <q-btn fab color="red" @click="confirmDelete = true">
        <carbon-trash-can class="text-xl" />
      </q-btn>
    </q-page-sticky>

    <q-dialog v-model="confirmDelete">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar color="negative" text-color="white">
            <carbon-warning />
          </q-avatar>
          <div>
            <p class="q-ml-sm">
              Are you sure?
            </p>
            <p class="q-ml-sm">
              <i>This action cannot be reversed.</i>
            </p>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn v-close-popup flat label="Cancel" color="warning" />
          <q-btn v-close-popup flat label="Delete Reward" color="negative" @click="deleteReward" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<style>
.reward-name-container {
  display: grid;
  grid-template-columns: 1fr 0.0fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-auto-flow: row;
  justify-items: stretch;
  justify-content: space-evenly;
  grid-template-areas:
    "name claimed";
}

.name {
  justify-self: start;
  grid-area: name;
}

.claimed {
  justify-self: end;
  grid-area: claimed;
}

</style>
