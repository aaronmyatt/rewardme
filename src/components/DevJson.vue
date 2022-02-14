<template>
  <q-expansion-item
    v-if="IS_DEV"
    icon="settings"
    label="Data"
  >
    <q-card>
      <q-card-section>
        <pre>{{ devjson }}</pre>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
<script lang="ts">
export default {
  props: ['jsonable'],
  data() {
    return {
      IS_DEV: import.meta.env.DEV,
    }
  },
  computed: {
    devjson(): string {
      try {
        return JSON.stringify(this.jsonable, null, '  ')
      }
      catch (e) {
        return e.message
      }
    },
  },
}
</script>
