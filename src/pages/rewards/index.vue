<script setup lang="ts">
import useRewards from '~/composables/useRewards'
// noinspection TypeScriptCheckImport
import DefaultReward from '~icons/custom/Reward'
const { rewards } = useRewards()
</script>

<template>
  <q-page class="p-4 xl:w-2/3 md:mx-auto space-y-2 column">
    <Banner>
      <h1 class="font-bold text-xl">
        Create Rewards
      </h1>
      <p>Add rewards your child desires, let the app and the tasks you add coach them through to achieving it.</p>
    </Banner>
    <q-card flat>
      <q-card-section p="0px">
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
      <template v-if="rewards.length > 0">
        <q-card-section>
          <RewardList :rewards="rewards" class="rounded-xl" />
        </q-card-section>
      </template>
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
