<!--suppress TypeScriptCheckImport -->
<script setup lang="ts">
import PubSub from 'pubsub-js'
import useReinforcement from '~/composables/useReinforcement'
import { Topics } from '~/schemas'
import DefaultReward from '~icons/custom/Reward'
import Add from '~icons/carbon/add'

const { count } = useReinforcement()
</script>

<template>
  <q-page class="p-4 xl:w-2/3 md:mx-auto">
    <Banner>
      <h1 class="font-bold text-2xl">
        Welcome to Reward Me!
      </h1>
      <p>Improving behaviour through effective rewards</p>
    </Banner>

    <div class="dashboard-container pt-4">
      <div class="Reinforce">
        <div class="w-full md:w-2/3 mx-auto flex justify-center">
          <q-btn
            class="aspect-square text-8xl w-10/12"
            round @click="PubSub.publish(Topics.REWARD_BEHAVIOUR)"
          >
            <Add v-if="count === 0" />
            <div v-else>
              {{ count }}
            </div>
          </q-btn>
        </div>
      </div>
      <div class="Milestones flex">
        <q-btn class="mx-auto w-1/2" padding="none" no-caps push to="/rewards">
          <DefaultReward class="w-full h-auto" />
          <div>
            <span class="font-bold">Rewards</span>
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

 <style>
.dashboard-container {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  gap: 10px 10px;
  grid-auto-flow: row dense;
  grid-template-areas:
    "Reinforce Reinforce"
    "Milestones Milestones";
}

.Reinforce { grid-area: Reinforce; }

.Profiles { grid-area: Profiles; }

.Milestones { grid-area: Milestones; }
 </style>
