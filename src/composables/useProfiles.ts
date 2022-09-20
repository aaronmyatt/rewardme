import imageCache from '~/composites/imageCache'
import { store } from '~/composites/store'
import { StoreKeys, Topics } from '~/schemas'
import type { IProfile } from '~/schemas'
const profiles = reactive([] as IProfile[])
const profileImages = ref({} as Record<string, string>)

export default function() {
  const router = useRouter()

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
  }

  function activateAndEdit(profile: IProfile) {
    setActiveProfile(profile)
    router.push('/settings')
  }

  function getActiveProfile() {
    return profiles.find(profile => profile.active)
  }

  function archiveProfile(profile: IProfile) {
    profiles.map((p) => {
      if (p.id === profile.id) {
        p.archived = true
        p.active = false
      }
      return p
    })
    store.setItem(StoreKeys.PROFILES, profiles)
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
