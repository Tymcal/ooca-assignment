import type { AnimationEvent, ReactNode } from 'react'
import type { TransitionKind } from './transitionMap'
import './screenTransitions.css'

type ScreenStageRole = 'enter' | 'exit' | 'idle'

type ScreenStageProps = {
  children: ReactNode
  role: ScreenStageRole
  kind: TransitionKind | null
  onAnimationEnd?: (event: AnimationEvent<HTMLDivElement>) => void
}

export function ScreenStage({
  children,
  role,
  kind,
  onAnimationEnd,
}: ScreenStageProps) {
  const className =
    role === 'idle' || kind == null
      ? 'screen-stage'
      : `screen-stage screen-stage--${role}-${kind}`

  return (
    <div className={className} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  )
}
