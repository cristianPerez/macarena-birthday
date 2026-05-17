import { useCallback, useEffect, useRef, useState } from 'react'
import { audio } from '../config/assets'

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)

  const syncState = useCallback((el: HTMLAudioElement) => {
    setIsPlaying(!el.paused)
    setIsMuted(el.muted && !el.paused)
  }, [])

  const playWithSound = useCallback(async () => {
    const el = audioRef.current
    if (!el || !isAvailable) return false

    el.muted = false

    try {
      await el.play()
      syncState(el)
      return true
    } catch {
      syncState(el)
      return false
    }
  }, [isAvailable, syncState])

  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    const onError = () => setIsAvailable(false)
    const onPlay = () => syncState(el)
    const onPause = () => syncState(el)

    el.addEventListener('error', onError)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)

    const autoplay = async () => {
      const ok = await playWithSound()
      if (ok) return

      el.muted = true
      try {
        await el.play()
        syncState(el)
      } catch {
        syncState(el)
      }
    }

    void autoplay()

    return () => {
      el.removeEventListener('error', onError)
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
    }
  }, [playWithSound, syncState])

  const toggle = async () => {
    const el = audioRef.current
    if (!el || !isAvailable) return

    if (!el.paused && !el.muted) {
      el.pause()
      syncState(el)
      return
    }

    await playWithSound()
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={audio.birthdaySong}
        preload="auto"
        loop
        autoPlay
        playsInline
      />

      <button
        type="button"
        onClick={() => void toggle()}
        disabled={!isAvailable}
        className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#d66b8f] text-xl text-white shadow-lg transition hover:scale-105 hover:bg-[#c45a7d] disabled:cursor-not-allowed disabled:opacity-50"
        aria-label={isPlaying && !isMuted ? 'Pausar música' : 'Reproducir música de cumpleaños'}
        title={
          isAvailable
            ? isMuted
              ? 'Activar sonido'
              : isPlaying
                ? 'Pausar música'
                : 'Reproducir música'
            : 'No se encontró el audio'
        }
      >
        {isMuted ? '🔇' : isPlaying ? '⏸' : '🎵'}
      </button>
    </>
  )
}
