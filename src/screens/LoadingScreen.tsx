import { useEffect } from 'react'
import { MookaIllustration } from '../design-system/MookaIllustration'
import './LoadingScreen.css'

type LoadingScreenProps = {
  onDone: () => void
  delayMs?: number
}

export function LoadingScreen({ onDone, delayMs = 2000 }: LoadingScreenProps) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, delayMs)
    return () => window.clearTimeout(timer)
  }, [onDone, delayMs])

  return (
    <div className="loading-screen">
      <MookaIllustration variant="phone" className="loading-screen__art" />
      <div className="loading-screen__spinner" role="status" aria-label="กำลังโหลด" />
      <p className="loading-screen__text">มูก้ากำลังหาให้อยู่นะ...</p>
    </div>
  )
}
