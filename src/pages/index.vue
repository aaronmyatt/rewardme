<!--suppress TypeScriptCheckImport -->
<script setup lang="ts">
import PubSub from 'pubsub-js'
import useActiveProfileImage from '~/composables/useActiveProfileImage'
import useProfiles from '~/composables/useProfiles'
import useReinforcement from '~/composables/useReinforcement'
import { Topics } from '~/schemas'
import type { IProfile } from '~/schemas'
import DefaultReward from '~icons/custom/Reward'
import Add from '~icons/carbon/add'
import Subtract from '~icons/carbon/subtract'
import Kids from '~icons/custom/Kids'

const { count } = useReinforcement()
const profile = reactive({} as IProfile)
const { getActiveProfile } = useProfiles()
onMounted(() => {
  Object.assign(profile, getActiveProfile())
})
const { profileImage } = useActiveProfileImage()

</script>

<template>
  <q-page class="p-4 xl:w-2/3 md:mx-auto">
    <Banner>
      <h1 class="font-bold text-2xl">
        Welcome to Reward Me!
      </h1>
      <p>Good deeds, good rewards</p>
    </Banner>

    <q-card v-if="profile.id" flat class="bg-secondary rounded-xl mt-4">
      <q-card-section class="row">
        <div class="col-3">
          <q-img v-if="profileImage" :src="profileImage" class="rounded-full" />
          <DefaultAvatar v-else class="w-full h-auto rounded-full bg-white" />
        </div>
        <div class="col-9 pl-4 column justify-center">
          <p class="text-xl font-bold text-primary">
            {{ profile && profile.name }}
          </p>
          <p class="text-lg font-bold text-red-800 opacity-50">
            {{ count }}
          </p>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="row p-0">
        <q-btn
          flat
          class="col-6 aspect-video"
          @click="PubSub.publish(Topics.DISCOUNT_BEHAVIOUR, {id: profile.id})"
        >
          <Subtract class="text-4xl bg-primary rounded-full text-white" />
        </q-btn>
        <q-btn
          flat
          class="col-6 aspect-video"
          @click="PubSub.publish(Topics.REWARD_BEHAVIOUR, {id: profile.id})"
        >
          <Add class="text-4xl bg-primary rounded-full text-white" />
        </q-btn>
      </q-card-section>
      <q-card-section class="row p-0">
        <q-btn to="/rewards" class="bg-primary text-secondary font-bold col-12 rounded-b-xl py-4" no-caps flat label="Redeem Points" />
      </q-card-section>
    </q-card>

    <div class="dashboardcontainer pt-4">
      <div class="profiles flex bg-secondary">
        <q-btn flat class="flex-1" no-caps push to="/profiles">
          <q-img v-if="profileImage" :src="profileImage" class="rounded-full" />
          <DefaultAvatar v-else class="w-full h-auto rounded-full bg-white" />
          <div font="bold">
            Create Profile
          </div>
        </q-btn>
      </div>
      <div class="rewards flex bg-secondary">
        <q-btn flat class="flex-1" padding="none" no-caps push to="/rewards">
          <DefaultReward class="w-full h-auto" />
          <div>
            <span font="bold">Rewards</span>
          </div>
        </q-btn>
      </div>
      <div class="TBC">
        <div class="w-full md:w-2/3 mx-auto bg-secondary">
          <q-card flat square class="bg-secondary">
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
    </div>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<style>
.dashboardcontainer {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  gap: 10px 10px;
  grid-auto-flow: row dense;
  grid-template-areas:
    "profiles rewards"
    "TBC TBC";
}

.TBC {
  grid-area: TBC;
}
.profiles { grid-area: profiles; }

.rewards { grid-area: rewards; }

</style>
