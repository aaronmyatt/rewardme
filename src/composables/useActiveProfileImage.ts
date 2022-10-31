import { ref } from 'vue'
import imageCache from '~/composites/imageCache'
import useProfiles from '~/composables/useProfiles'

export default function() {
  const { getActiveProfile } = useProfiles()

  const profileImage = ref <String|undefined>(undefined)

  const getProfileImage = async() => {
    const activeProfile = getActiveProfile.value
    if (activeProfile && activeProfile.image)
      profileImage.value = await imageCache.getImage(activeProfile.image)
    else
      profileImage.value = undefined
  }

  whenever(getActiveProfile, getProfileImage)

  return { profileImage }
}
