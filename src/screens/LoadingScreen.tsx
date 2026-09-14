import { useEffect } from 'react'
import loadingSpinner from '../assets/icons/loading-spinner.png'
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
    <div className="flex flex-1 flex-col items-center justify-center gap-5 p-6 text-center">
      <MookaIllustration
        variant="phone"
        className="mb-2 block h-auto w-40 object-contain"
      />
      <img
        src={loadingSpinner}
        alt=""
        width={28}
        height={28}
        className="size-7 animate-[spin_0.8s_linear_infinite]"
        role="status"
        aria-label="กำลังโหลด"
      />
      <p className="loading-screen__headline">มูก้ากำลังหาให้อยู่นะ...</p>
    </div>
  )
}
