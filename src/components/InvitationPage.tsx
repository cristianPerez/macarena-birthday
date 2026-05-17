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
            <p className="text-2xl font-semibold tracking-tight text-[#3f3a38]">
              ¡Fiesta de Maca!
            </p>
            <p className="mt-3 text-base font-medium text-[#8a817c]">
              Agrega <code className="rounded bg-white/60 px-1">?guest=Nombre</code> en el enlace para
              personalizar
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
