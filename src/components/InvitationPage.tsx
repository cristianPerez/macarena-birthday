import { GuestGreeting } from './GuestGreeting'
import { CollageStage } from './CollageStage'
import { EventDetails } from './EventDetails'
import { AudioToggle } from './AudioToggle'
import { useGuestName } from '../hooks/useGuestName'

export function InvitationPage() {
  const { guestName, hasGuest } = useGuestName()

  return (
    <div className="min-h-dvh bg-[#f0e6dd]">
      <main className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col gap-y-2">
        {hasGuest ? (
          <GuestGreeting guestName={guestName} />
        ) : (
          <header className="px-4 pt-8 text-center">
            <p className="text-sm font-medium tracking-wide text-[#6b5b55] uppercase">
              Primer cumpleaños
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-[#3f3a38]">¡Fiesta de Maca!</h1>
            <p className="mt-2 text-sm text-[#6f6762]">
              Agrega <code className="rounded bg-white/60 px-1">?guest=Nombre</code> o{' '}
              <code className="rounded bg-white/60 px-1">?v=1</code> /{' '}
              <code className="rounded bg-white/60 px-1">?v=2</code> en el enlace
            </p>
          </header>
        )}

        <CollageStage />
        <EventDetails />
      </main>

      <AudioToggle />
    </div>
  )
}
