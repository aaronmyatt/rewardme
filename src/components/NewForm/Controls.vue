<script lang="ts">
import { QBtn, QStepperNavigation } from 'quasar'

export default {
  // <q-stepper-navigation class="flex justify-end mt-5">
  //   <q-btn v-if="step > 1" flat color="primary" label="Back" @click="$refs.stepper.previous()" />
  //   <q-btn v-if="step < 6" color="primary" label="Continue" @click="$refs.stepper.next()" />
  // </q-stepper-navigation>

  props: ['step', 'backFunc', 'nextFunc'],

  render() {
    const backButton = h(QBtn, {
      onClick: this.backFunc,
      label: 'Back',
      flat: true,
      color: 'primary',
    })
    const nextButton = h(QBtn, {
      onClick: this.nextFunc,
      label: 'Continue',
      color: 'primary',
    })
    return h(QStepperNavigation, {
      class: 'flex justify-end mt-5 space-x-2',
    }, () => [
      this.step > 1 ? backButton : undefined,
      this.step < 6 ? nextButton : undefined,
    ])
  },
}
</script>
