<script setup lang="ts">
import RewardCard from '~/components/RewardCard.vue'
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
onMounted(() => {
  const matchingReward = rewards.find(reward => reward.id === props.rewardid)
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
    <RewardCard v-if="reward" :reward="reward" :reward-image="rewardImage" class="w-full md:w-2/3 xl:w-1/2 mx-auto" />

    <!-- floating delete button-->
    <FloatingDelete :on-confirmation-action="deleteReward" />
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
