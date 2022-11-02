<script setup lang="ts">
import RewardCard from '~/components/RewardCard.vue'
import RewardClaimedList from '~/components/RewardClaimedList.vue'
import RewardWishList from '~/components/RewardWishList.vue'
import useRewards from '~/composables/useRewards'
// noinspection TypeScriptCheckImport
import DefaultReward from '~icons/custom/Reward'
const { rewards, goal } = useRewards()
</script>

<template>
  <q-page class="xl:w-2/3 md:mx-auto space-y-2">
    <Banner>
      <h1 class="font-bold text-2xl sm:text-3xl">
        Create Rewards
      </h1>
      <p class="text-base sm:text-lg">
        Rewards can be claimed when you earn enough points.
      </p>
    </Banner>
    <q-card flat class="space-y-5 p-4">
      <q-card-section v-if="goal" class="p-0">
        <h2 class="font-bold text-xl sm:text-2xl">
          Current Goal
        </h2>
      </q-card-section>
      <q-card-section v-if="goal" class="p-0">
        <RewardCard :reward="goal" horizontal />
      </q-card-section>
      <q-card-section v-else class="text-center p-0">
        <div class="bg-accent rounded-xl p-5">
          <h3 class="text-xl font-bold">
            Choose a goal from your wishlist
          </h3>
        </div>
      </q-card-section>
    </q-card>
    <q-card flat class="space-y-5 p-4">
      <q-card-section class="p-0">
        <h2 class="font-bold text-xl sm:text-2xl">
          Wishlist
        </h2>
      </q-card-section>
      <q-card-section class="p-0">
        <template v-if="rewards.length > 0">
          <RewardWishList :rewards="rewards" class="rounded-xl">
            <q-btn
              no-caps
              class="rounded-xl text-primary bg-secondary text-5xl sm:text-7xl md:text-8xl sm:m-4 md:m-6 lg:text-9xl lg:m-8"
              :to="{
                name: 'rewards-new'
              }"
              icon="add"
              push
            />
          </RewardWishList>
        </template>
      </q-card-section>
    </q-card>
    <q-separator />
    <q-card flat class="space-y-5 p-4">
      <q-card-section class="p-0">
        <h2 class="font-bold text-xl sm:text-2xl">
          Claimed
        </h2>
      </q-card-section>
      <q-card-section class="p-0">
        <template v-if="rewards.length > 0">
          <RewardClaimedList :rewards="rewards" class="rounded-xl" />
        </template>
      </q-card-section>
    </q-card>
    <q-space />
    <DefaultReward class="w-1/2 h-auto mx-auto" />

    <q-page-sticky
      position="bottom-right"
      :offset="[25,25]"
    >
      <q-btn :disable="!!!rewards" padding="15px" class="bg-primary text-secondary" to="/rewards/new" icon-right="redeem" label="Add Reward" no-caps rounded />
    </q-page-sticky>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
