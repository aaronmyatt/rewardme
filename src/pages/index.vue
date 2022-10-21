<!--suppress TypeScriptCheckImport -->
<script setup lang="ts">
import PubSub from 'pubsub-js'
import ActiveUserAvatar from '~/components/ActiveUserAvatar.vue'
import DevJson from '~/components/DevJson.vue'
import useProfiles from '~/composables/useProfiles'
import useRewards from '~/composables/useRewards'
import useReinforcement from '~/composables/useReinforcement'
import { Topics } from '~/schemas'
import type { IProfile } from '~/schemas'
import DefaultReward from '~icons/custom/Reward'
import Add from '~icons/carbon/add'
import Subtract from '~icons/carbon/subtract'
import Kids from '~icons/custom/Kids'

const { totalClaimed } = useRewards()
const { count } = useReinforcement()
const profile = reactive({} as IProfile)
const { getActiveProfile } = useProfiles()
onMounted(() => {
  Object.assign(profile, getActiveProfile())
})
const openEditPointsDialog = ref(false)
const editPointsAmount = ref(0)
</script>

<template>
  <q-page>
    <Banner>
      <h1 class="font-bold text-2xl">
        Welcome to Reward Me!
      </h1>
      <p class="text-lg">
        Good deeds, good rewards
      </p>
    </Banner>

    <main class="xl:w-2/3 md:mx-auto space-y-4 p-4">
      <q-card v-if="profile.id" flat class="bg-secondary rounded-xl mt-4">
        <q-card-section class="row">
          <div class="col-3">
            <ActiveUserAvatar />
          </div>
          <div class="col-9 column flex-nowrap">
            <p class="row text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4F5D90] leading-loose capitalize pl-6">
              {{ profile && profile.name }}
            </p>
            <div class="row items-center justify-center h-full text-center font-bold text-lg md:text-xl">
              <div class="col-6">
                <p class="text-[#4F5D90]">
                  {{ count }}
                </p>
                <p class="text-[#4F5D90]">
                  Total Points
                </p>
              </div>
              <div class="col-6">
                <p class="text-[#4F5D90]">
                  {{ totalClaimed }}
                </p>
                <p class="text-[#4F5D90]">
                  Total Claimed
                </p>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row p-0">
          <q-btn
            flat
            class="col-6 aspect-video py-6"
            @click="PubSub.publish(Topics.DISCOUNT_BEHAVIOUR, {id: profile.id})"
          >
            <Subtract class="text-4xl bg-primary rounded-full text-white" />
          </q-btn>
          <q-btn
            flat
            class="col-6 aspect-video py-6"
            @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id})"
          >
            <Add class="text-4xl bg-primary rounded-full text-white" />
          </q-btn>
        </q-card-section>
      </q-card>

      <q-btn-group spread outline class="row space-x-px font-bold">
        <q-btn class="bg-primary text-secondary text-base md:text-xl" no-caps label="Edit Points" @click="openEditPointsDialog = !openEditPointsDialog" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="10" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 10})" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="20" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 20})" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="50" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 50})" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="100" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 100})" />
      </q-btn-group>

      <div class="row space-x-4">
        <q-btn flat stack class="col-6 flex-1 bg-secondary rounded-xl" no-caps push to="/profiles">
          <ActiveUserAvatar class="w-3/4 h-auto" />
          <div class="font-bold">
            Create Profile
          </div>
        </q-btn>
        <q-btn flat stack class="col-6 flex-1 bg-secondary rounded-xl" padding="none" no-caps push to="/rewards">
          <DefaultReward class="w-3/4 h-auto" />
          <div>
            <span class="font-bold">Rewards</span>
          </div>
        </q-btn>
      </div>
      <div class="TBC">
        <div class="w-full md:w-2/3 mx-auto bg-secondary rounded-xl">
          <q-card flat class="bg-secondary rounded-xl">
            <q-card-section>
              <q-toolbar>
                <q-toolbar-title class="text-uppercase font-bold text-primary text-center">
                  TBC Section
                </q-toolbar-title>
              </q-toolbar>
            </q-card-section>
            <q-card-section>
              <Kids class="w-full h-auto" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </main>

    <q-dialog v-model="openEditPointsDialog">
      <DevJson :jsonable="editPointsAmount" />

      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">
            Edit Points
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model.number="editPointsAmount" type="number" dense autofocus />
        </q-card-section>

        <q-card-actions class="text-primary row justify-around">
          <q-btn v-close-popup flat class="col-5" @click="PubSub.publish(Topics.DISCOUNT_BEHAVIOUR, {id: profile.id, change: editPointsAmount})">
            <Subtract class="text-4xl bg-primary rounded-full text-white" />
          </q-btn>
          <q-btn v-close-popup flat class="col-5" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: editPointsAmount})">
            <Add class="text-4xl bg-primary rounded-full text-white" />
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
