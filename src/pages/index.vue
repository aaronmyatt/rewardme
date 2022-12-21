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
import Logo from '~/png/logo.svg'

const { totalClaimed } = useRewards()
const { count } = useReinforcement()
const { getActiveProfile } = useProfiles()

const profile = reactive({} as IProfile)
onMounted(() => {
  Object.assign(profile, getActiveProfile.value)
})
const openEditPointsDialog = ref(false)
const editPointsAmount = ref(0)
const showTip = ref(false)
setTimeout(() => {
  showTip.value = true
}, 5000)
</script>

<template>
  <q-page>
    <section v-if="!profile.id" class="px-10 py-10 sm:py-20 md:py-40 bg-gradient-to-b from-[#07075c] to-[#7989c4] row justify-center items-center">
      <div class="col-xs-12 col-md-6 column items-center md:items-start justify-center md:justify-start">
        <div class="prose font-sans text-center md:text-left">
          <h1 class="text-white font-extrabold">
            Welcome to RewardMe!
          </h1>
          <h2 class="text-white">
            Good deeds, good rewards
          </h2>
          <h3 class="text-white">
            RewardMe is the culmination of a parent's journey to effectively guide their children to greatness.
          </h3>
        </div>
        <q-btn flat class="bg-accent rounded-full mt-10 text-white md:self-start" padding="18px" no-caps push to="/profiles" size="xl" align="left">
          <div class="font-bold text-base md:text-2xl">
            Create a free profile >
          </div>
          <q-tooltip v-model="showTip" class="animate-bounce bg-transparent text-white font-bold text-center text-xs sm:text-sm" anchor="bottom middle" self="top middle" :offset="[10, 10]">
            <p>Get started by creating a profile for one of your children</p>
          </q-tooltip>
          <q-tooltip v-model="showTip" class="bg-transparent text-white font-bold text-center text-xs sm:text-sm" anchor="bottom middle" self="top middle" :offset="[10, 30]">
            <p>Or watch an introductory video 👇</p>
          </q-tooltip>
        </q-btn>
      </div>
      <div class="col-xs-12 col-md-6 column justify-center items-center">
        <Kids class="w-3/4 h-auto" />
      </div>
    </section>

    <main class="xl:w-2/3 md:mx-auto space-y-4 p-4">
      <q-card v-if="profile.id" flat class="bg-secondary rounded-xl mt-4">
        <q-card-section class="row">
          <div class="col-3">
            <ActiveUserAvatar />
          </div>
          <div class="col-9 column flex-nowrap">
            <p class="row text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#4F5D90] leading-loose capitalize pl-6">
              {{ profile && profile.name }}
            </p>
            <div class="row items-center justify-center h-full text-center font-bold sm:text-lg md:text-xl">
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

      <q-btn-group v-if="profile.id" spread outline class="row space-x-px font-bold rounded-xl">
        <q-btn class="bg-primary text-secondary md:text-xl" no-caps label="Edit Points" @click="openEditPointsDialog = !openEditPointsDialog" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="10" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 10})" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="20" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 20})" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="50" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 50})" />
        <q-btn class="bg-primary text-secondary text-xl" no-caps label="100" @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id, change: 100})" />
      </q-btn-group>

      <div v-if="profile.id" class="row space-x-4">
        <q-btn flat stack class="col-6 flex-1 bg-secondary rounded-xl" no-caps push to="/profiles">
          <ActiveUserAvatar class="bg-white rounded-full w-3/4" />
          <div class="font-bold">
            Switch Profile
          </div>
        </q-btn>
        <q-btn flat stack class="col-6 flex-1 bg-secondary rounded-xl" no-caps push to="/rewards">
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
                  Latest Posts
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
