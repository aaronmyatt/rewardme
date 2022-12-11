<script setup lang="ts">
import LastUpdated from '~/components/LastUpdated.vue'
import useProfiles from '~/composables/useProfiles'
import useReinforcement from '~/composables/useReinforcement'
import useRewards from '~/composables/useRewards'
import type { IProfile, IReinforcement, IReward } from '~/schemas'

type OneOf = IReinforcement | IReward | IProfile

const { history } = useReinforcement()
const { rewards } = useRewards()
const { profiles } = useProfiles()

const sorted = computed(() => {
  return [
    ...rewards
      .map(item => [item, 'Reward Added']),
    ...history
      .map(item => [item, 'Count Change']),
    ...profiles
      .map(item => [item, 'Profile Added']),
  ]
  // .sort((first: [OneOf, string], second: [OneOf, string]) => {
  // not proud of this but it should be an isolated case,
  // wrangling multiple object types, nested into with a dirty array
  // which itself was a compromise to get around the challenge
  // of adding temporary properties to predefined object types
    .sort((first: any, second: any) => {
      return (new Date(second[0].createddate)).valueOf() - (new Date(first[0].createddate).valueOf())
    })
})
</script>
<template>
  <q-page class="xl:w-2/3 md:mx-auto space-y-2">
    <Banner>
      <h1 class="font-bold text-2xl sm:text-3xl">
        Activity Log
      </h1>
      <p class="text-base sm:text-lg">
        View all new actions within your app in chronological order.
      </p>
    </Banner>
    <q-list>
      <q-item v-for="(item, index) in sorted" :key="index">
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="add" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item[1] }}</q-item-label>
          <q-item-label caption lines="2">
            {{ item[0].count || item[0].name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>
            <LastUpdated :date="item[0].createddate" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
