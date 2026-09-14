import { useEffect } from 'react'
import { MookaIllustration } from '../design-system/MookaIllustration'

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
      <div
        className="size-7 animate-[spin_0.8s_linear_infinite] rounded-full border-[2.5px] border-transparent border-t-[#9ca3af] border-r-[#d1d5db] border-b-border"
        role="status"
        aria-label="กำลังโหลด"
      />
      <p className="m-0 text-lg font-medium text-text">มูก้ากำลังหาให้อยู่นะ...</p>
    </div>
  )
}
