import { createPinia } from 'pinia'
import type { UserModule } from '~/types'
import testProfiles from '~/data/test_profiles.json'
import testRewards from '~/data/test_rewards.json'
import { Profile } from '~/schemas'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)

  pinia.use(({ store }) => {
    // if (import.meta.env.DEV) {
    if (false) {
      store.activeProfile = testProfiles[0].id
      store.profiles = testProfiles.map((profile) => {
        const dateofbirth = new Date(profile.dateofbirth)
        return {
          ...profile,
          dateofbirth,
        }
      }).map((profile) => {
        return Profile.parse(profile)
      })
    }

    store.rewards = testRewards
  })

  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
}
