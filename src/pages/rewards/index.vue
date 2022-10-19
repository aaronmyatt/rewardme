<script setup lang="ts">
import useRewards from '~/composables/useRewards'
// noinspection TypeScriptCheckImport
import DefaultReward from '~icons/custom/Reward'
const { rewards } = useRewards()
</script>

<template>
  <q-page class="xl:w-2/3 md:mx-auto space-y-2 column">
    <Banner>
      <h1 class="font-bold text-xl">
        Create Rewards
      </h1>
      <p>Rewards can be claimed by spending points.</p>
    </Banner>
    <q-card flat class="space-y-5">
      <q-card-section class="p-0">
        <q-btn
          :disable="!!!rewards"
          flat
          no-caps
          size="medium"
          class="py-4 w-full rounded-xl text-primary bg-secondary"
          to="/rewards/new"
          icon-right="add"
          label="Add Reward"
        />
      </q-card-section>

      <q-card-section class="p-0">
        <template v-if="rewards.length > 0">
          <RewardList :rewards="rewards" class="rounded-xl" />
        </template>
      </q-card-section>
    </q-card>
    <q-space />
    <DefaultReward class="w-1/2 h-auto mx-auto" />

    <q-page-sticky
      position="bottom-right"
      :offset="[25,25]"
    >
      <q-btn :disable="!!!rewards" padding="15px" class="bg-primary text-secondary" to="/rewards/new" icon-right="redeem" label="Add Reward" no-caps />
    </q-page-sticky>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
