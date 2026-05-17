import { useMemo } from 'react'

const PARAM_KEY = 'guest'
const DEFAULT_GUEST = ''

function formatGuestName(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed) return DEFAULT_GUEST

  return trimmed
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')
}

export function useGuestName(): { guestName: string; hasGuest: boolean } {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const guestName = formatGuestName(params.get(PARAM_KEY) ?? '')
    return { guestName, hasGuest: guestName.length > 0 }
  }, [])
}
