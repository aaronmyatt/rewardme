<template>
  <q-btn dense round push>
    <ActiveUserAvatar
      class="cursor-pointer rounded-full bg-white"
    >
      <q-menu touch-position>
        <q-list style="min-width: 100px">
          <q-item v-close-popup clickable to="/rewards">
            <q-item-section>Rewards</q-item-section>
          </q-item>
          <q-item v-close-popup clickable to="/profiles">
            <q-item-section>Switch Profile</q-item-section>
          </q-item>
          <q-separator />
          <q-item v-close-popup clickable to="/settings">
            <q-item-section>Profile Settings</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </ActiveUserAvatar>
  </q-btn>
</template>
