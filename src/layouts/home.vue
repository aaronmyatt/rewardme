<script setup lang="ts">
import logo from '~/png/logo.svg'
</script>
<template>
  <div class="max-w-screen-2xl mx-auto h-full">
    <q-layout view="lHr LpR lFr" container style="height:100%">
      <q-header>
        <q-toolbar class="bg-primary">
          <q-toolbar-title class="shrink-0 overflow-visible">
            <q-btn to="/" flat padding="0" size="lg" no-caps>
              <q-btn to="/" flat padding="0" size="lg" no-caps>
                <logo />
              </q-btn>
            </q-btn>
          </q-toolbar-title>
          <q-space />
          <ProfileMenu />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
