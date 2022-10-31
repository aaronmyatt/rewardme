import { useQuasar } from 'quasar'
import imageCache from '~/composites/imageCache'
import { store } from '~/composites/store'
import { StoreKeys, Topics } from '~/schemas'
import type { IProfile } from '~/schemas'
const profiles = reactive([] as IProfile[])
const profileImages = ref({} as Record<string, string>)

export default function() {
  const router = useRouter()
  const $q = useQuasar()

  onMounted(() => {
    Object.assign(profiles, store.getItem(StoreKeys.PROFILES) || [])

    profiles
      .map(async(profile) => {
        if (profile.image !== undefined) {
          const image = await imageCache.getImage(profile.image)
          if (image) profileImages.value[profile.image] = image
        }
      })
  })

  function setActiveProfile(activeProfile: IProfile) {
    profiles.map((profile) => {
      profile.active = profile.id === activeProfile.id
      return profile
    })
    store.setItem(StoreKeys.PROFILES, profiles)
    PubSub.publish(Topics.PROFILE_CHANGED, profiles)

    $q.notify({
      type: 'positive',
      message: `${activeProfile.name}'s Profile Activated`,
    })
  }

  function activateAndEdit(profile: IProfile) {
    setActiveProfile(profile)
    router.push('/settings')
  }

  const getActiveProfile = computed(() => profiles.find(profile => profile.active))

  function archiveProfile(profile: IProfile) {
    profiles.map((p) => {
      if (p.id === profile.id) {
        p.archived = true
        p.active = false
      }
      return p
    })
    store.setItem(StoreKeys.PROFILES, profiles)
    $q.notify({
      type: 'negative',
      message: 'Profile Archived',
    })
  }

  return {
    setActiveProfile,
    activateAndEdit,
    getActiveProfile,
    archiveProfile,
    profileImages,
    profiles,
  }
}
