import { useMemo } from 'react'
import { assets, type InvitationVersion } from '../config/assets'

const DEFAULT_VERSION: InvitationVersion = '2'

function parseVersion(raw: string | null): InvitationVersion {
  const value = raw?.trim().toLowerCase()

  if (value === '1' || value === 'v1') return '1'
  if (value === '2' || value === 'v2') return '2'

  return DEFAULT_VERSION
}

export function useInvitationVersion() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const version = parseVersion(params.get('v') ?? params.get('version'))
    const imageSrc = assets.invitations[version]

    return { version, imageSrc }
  }, [])
}
