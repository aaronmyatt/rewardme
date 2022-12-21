import useProfiles from '~/composables/useProfiles'

export default function() {
  const { profiles } = useProfiles()

  return {
    NO_PROFILES: profiles.length === 0,
    ONE_OR_MORE_PROFILES: profiles.length >= 1,
  }
}
