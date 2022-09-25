<script setup lang="ts">
import { useQuasar } from 'quasar'
import useRewards from '~/composables/useRewards'
import { store } from '~/composites/store'
import type { IReward } from '~/schemas'
import { StoreKeys } from '~/schemas'

const props = defineProps({
  rewardid: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const $q = useQuasar()
const { rewards } = useRewards()
const reward = ref<IReward>()

onMounted(() => {
  const matchingReward = rewards.value.find(reward => reward.id === props.rewardid)
  if (matchingReward)
    reward.value = matchingReward

  else router.push('/rewards')
})

function onSubmit(reward: IReward) {
  const rewards = store.getItem(StoreKeys.REWARDS) || []
  const updatedRewards = rewards.filter((r: IReward) => r.id !== reward.id)
  updatedRewards.push(reward)
  store.setItem(StoreKeys.REWARDS, updatedRewards)

  $q.notify({
    type: 'positive',
    caption: 'Reward Updated',
  })

  router.push({
    name: 'rewards-rewardid',
    params: {
      rewardid: props.rewardid,
    },
  })
}

</script>

<template>
  <div class="md:w-1/2 mx-auto">
    <q-toolbar>
      <q-toolbar-title>
        Edit Reward
      </q-toolbar-title>
    </q-toolbar>
    <RewardForm v-if="reward" :model-value="reward" @submit="onSubmit" />
  </div>
</template>
