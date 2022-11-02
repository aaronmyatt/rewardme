<script setup lang="ts">
import { useQuasar } from 'quasar'
import { store } from '~/composites/store'
import { StoreKeys } from '~/schemas'
import type { IReward } from '~/schemas'

const router = useRouter()
const $q = useQuasar()

function onSubmit(reward: IReward) {
  const rewards = store.getItem(StoreKeys.REWARDS) || []
  rewards.push(reward)
  store.setItem(StoreKeys.REWARDS, rewards)

  $q.notify({
    type: 'positive',
    caption: 'Reward Added',
  })

  router.push({
    name: 'rewards',
  })
}

</script>

<template>
  <div class="md:w-1/2 mx-auto">
    <q-toolbar>
      <q-toolbar-title>
        New Reward
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar inset>
      <p>
        Add the rewards your children want to their wishlist.
        Discuss which one they would like to be their current goal.
        Delight them with the reward when they reach the <strong>Target</strong> points.
      </p>
    </q-toolbar>

    <RewardForm @submit="onSubmit" />
  </div>
</template>
