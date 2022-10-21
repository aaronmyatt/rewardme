<script setup lang="ts">
import logo from '~/png/logo.svg'
</script>
<template>
  <div class="max-w-screen-2xl mx-auto h-full">
    <q-layout view="lHr LpR lFr" container style="height:100%">
      <q-header>
        <q-toolbar class="bg-[#E6E9F6] py-2">
          <q-btn to="/" flat padding="0" size="lg" no-caps>
            <logo />
          </q-btn>
          <q-space />
          <ProfileMenu />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-footer elevated class="desktop-hide bg-secondary">
        <q-tabs :align="'center'" class="text-primary" no-caps>
          <q-route-tab name="kids" to="/">
            <carbon-home />
            Home
          </q-route-tab>
          <q-route-tab name="rewards" to="/rewards">
            <carbon-gift />
            Rewards
          </q-route-tab>
        </q-tabs>
      </q-footer>
    </q-layout>
  </div>
</template>
