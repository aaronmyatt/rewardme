<script setup lang="ts">
import type { z } from 'zod'
import type { Reward } from '~/schemas'
import DefaultReward from '~icons/custom/Reward'
import imageCache from '~/composites/imageCache'
import { useProfiles } from '~/stores/profiles'
import useActiveProfileImage from '~/composables/useActiveProfileImage'

type RewardType = z.infer<typeof Reward>

const profileStore = useProfiles()
const profileImage = useActiveProfileImage()
const rewards = profileStore.active.rewards
const rewardImages = [] as string[]
const tasksPending = {} as Record<string, RewardType>

for (const key in rewards) {
  const reward = rewards[key]
  const tasks = reward.tasks
  if (!reward.claimed) {
    if (Object.keys(tasks).length === 0) {
      tasksPending[key] = reward
    }
    else {
      const pendingTasks = Object.values(tasks).filter(task => !task.done)
      if (pendingTasks.length)
        tasksPending[key] = reward
    }
  }
}

for (const key in rewards) {
  const imagePath = rewards[key].image
  if (imagePath) {
    imageCache.getImage(imagePath).then((image) => {
      if (image) rewardImages.push(image)
    })
  }
}

const imageCycle = useCycleList(rewardImages)

const interval = setInterval(() => {
  imageCycle.next()
}, 3000)

onUnmounted(() => {
  clearInterval(interval)
})

</script>

<template>
  <q-page class="p-4 xl:w-2/3 md:mx-auto">
    <div class="bg-primary rounded-xl p-4 text-center text-white">
      <p class="font-bold text-xl">
        Welcome to Reward Me!
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="dashboardcontainer pt-4">
      <div class="Profiles flex">
        <q-btn class="flex-1" no-caps push to="/profiles" padding="none">
          <q-img v-if="profileImage" :src="profileImage" class="rounded" />
          <DefaultAvatar v-else class="w-full h-auto" />
          <div font="bold">
            Profiles
          </div>
        </q-btn>
      </div>
      <div class="Rewards flex">
        <q-btn class="flex-1" padding="none" no-caps push to="/rewards">
          <q-img
            v-if="rewardImages.length > 0"
            class="rounded"
            :src="imageCycle.state"
            ratio="1"
          />
          <DefaultReward v-else class="w-full h-auto" />
          <div>
            <span font="bold">Rewards</span>
          </div>
        </q-btn>
      </div>
      <div class="Tasks">
        <div class="w-full md:w-2/3 mx-auto">
          <q-card flat>
            <q-card-section>
              <q-toolbar inset class="bg-primary text-white shadow-2 rounded-t-xl">
                <q-toolbar-title>Pending Tasks</q-toolbar-title>
              </q-toolbar>
              <RewardList :rewards="tasksPending" class="rounded-b-xl" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

 <style>
.dashboardcontainer {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  gap: 10px 10px;
  grid-auto-flow: row dense;
  grid-template-areas:
    "Profiles Rewards"
    "Tasks Tasks";
}

.Tasks {
  grid-area: Tasks;
}
.Profiles { grid-area: Profiles; }

.Rewards { grid-area: Rewards; }

 </style>
