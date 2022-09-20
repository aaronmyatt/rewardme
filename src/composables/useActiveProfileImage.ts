import PubSub from 'pubsub-js'
import { ref } from 'vue'
import imageCache from '~/composites/imageCache'
import useProfiles from '~/composables/useProfiles'
import { Topics } from '~/schemas'

export default function() {
  const { getActiveProfile } = useProfiles()

  const profileImage = ref <String|undefined>(undefined)

  const getProfileImage = async() => {
    const activeProfile = getActiveProfile()
    if (activeProfile && activeProfile.image)
      profileImage.value = await imageCache.getImage(activeProfile.image)
    else
      profileImage.value = undefined
  }

  onMounted(getProfileImage)
  PubSub.subscribe(Topics.PROFILE_CHANGED, getProfileImage)

  return { profileImage }
}
