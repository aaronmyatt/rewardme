<script setup lang="ts">
import useProfiles from '~/composables/useProfiles'
// noinspection TypeScriptCheckImport
import Kids from '~icons/custom/Kids'
const { archiveProfile, activateAndEdit, setActiveProfile, profiles, profileImages } = useProfiles()

const activeProfiles = computed(() => profiles.filter(profile => !profile.archived))
</script>

<template>
  <q-page class="p-4 xl:w-2/3 md:mx-auto space-y-2 column">
    <Banner>
      <h1 class="font-bold text-xl">
        Create Profiles
      </h1>
      <p>Create as many profiles as you need. Track score and rewards for each independently</p>
    </Banner>
    <q-card flat>
      <q-card-section class="p-0">
        <q-btn
          no-caps
          flat
          size="medium"
          class="py-4 w-full rounded-xl text-primary bg-secondary"
          to="/profiles/new"
          label="Add Profile"
          icon-right="add"
        />
      </q-card-section>
      <q-card-section>
        <template v-if="!!activeProfiles">
          <q-list>
            <q-item
              v-for="profile in activeProfiles" :key="profile.id"
            >
              <q-item-section avatar>
                <q-avatar v-if="profile.image" w="50px" h="50px">
                  <q-img :src="profileImages[profile.image]" />
                </q-avatar>
                <DefaultAvatar v-else w="50px" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="capitalize">
                  {{ profile.name }}
                </q-item-label>
                <q-item-label class="capitalize" caption>
                  {{ profile.nickname }}
                </q-item-label>
              </q-item-section>
              <q-item-section v-if="profile.active" side class="text-primary">
                <q-btn unelevated disabled>
                  <div class="flex items-center">
                    <span class="pr-2">Active</span> <carbon-star />
                  </div>
                </q-btn>
              </q-item-section>
              <q-item-section v-else side class="text-accent">
                <q-btn unelevated @click="setActiveProfile(profile)">
                  <div class="flex items-center">
                    <span class="pr-2">switch</span> <carbon-touch-1 />
                  </div>
                </q-btn>
              </q-item-section>
              <q-item-section side>
                <q-btn stretch>
                  <carbon-overflow-menu-vertical />
                  <q-menu border="1 white" :offset="[0,5]">
                    <q-list style="min-width: 100px">
                      <q-item v-close-popup clickable class="bg-red-6 text-dark" @click="archiveProfile(profile)">
                        <q-item-section class="flex items-center">
                          <carbon-trash-can class="text-xl" />
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item v-close-popup clickable class="bg-primary" @click="activateAndEdit(profile)">
                        <q-item-section class="flex items-center">
                          <carbon-edit class="text-xl" />
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </template>
      </q-card-section>
    </q-card>
    <q-space />
    <Kids class="w-full h-auto" />
    <q-page-sticky position="bottom-right" :offset="[25,25]">
      <q-btn rounded padding="15px" color="primary" to="/profiles/new" no-caps icon-right="person_add" label="Add Profile" />
    </q-page-sticky>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
