<template>
  <q-page-sticky :position="$q.screen.lt.md ? 'bottom-left' : 'bottom-right'" :offset="$q.screen.lt.md ? [18,18] : [-18,-18]" expand>
    <q-btn fab color="red" @click="confirmDelete = true">
      <carbon-trash-can class="text-xl" />
    </q-btn>
  </q-page-sticky>

  <!-- confirm delete popup -->
  <q-dialog v-model="confirmDelete">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar color="negative" text-color="white">
          <carbon-warning />
        </q-avatar>
        <div>
          <p class="q-ml-sm">
            Are you sure?
          </p>
          <p class="q-ml-sm">
            <i>This action cannot be reversed.</i>
          </p>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancel" color="warning" />
        <q-btn v-close-popup flat label="Delete Reward" color="negative" @click="onConfirmationAction" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()
const confirmDelete = ref(false)

const props = defineProps({
  onConfirmationAction: {
    type: Function,
    required: true,
  },
})
</script>
