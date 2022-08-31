<script setup lang="ts">
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'
const router = useRouter()

function onSubmit(reward: IReward) {
  const rewards = store.getItem(StoreKeys.REWARDS) || []
  rewards.push(reward)
  store.setItem(StoreKeys.REWARDS, rewards)
  router.push('/rewards')
}

</script>

<template>
  <div class="md:w-1/2 mx-auto">
    <q-toolbar>
      <q-toolbar-title>
        New Reward
      </q-toolbar-title>
    </q-toolbar>

    <RewardForm @submit="onSubmit" />
  </div>
</template>
