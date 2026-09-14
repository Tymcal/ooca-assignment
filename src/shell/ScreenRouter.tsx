import { useCallback, useEffect, useState } from 'react'
import { InquiryScreen } from '../screens/InquiryScreen'
import { LoadingScreen } from '../screens/LoadingScreen'
import { PsychologistListScreen } from '../screens/PsychologistListScreen'
import { ResultsScreen } from '../screens/ResultsScreen'
import { AppShell } from './AppShell'
import { ScreenStage } from './transitions/ScreenStage'
import {
  resolveTransition,
  shellBackgroundFor,
  TRANSITION_DURATION_MS,
  type ScreenId,
  type TransitionKind,
} from './transitions/transitionMap'

export type { ScreenId }

type TransitionState = {
  from: ScreenId
  to: ScreenId
  kind: TransitionKind
}

type NavHandlers = {
  goList: () => void
  goInquiry: () => void
  goLoading: () => void
  goResults: () => void
}

export function ScreenRouter() {
  const [screen, setScreen] = useState<ScreenId>('list')
  const [transition, setTransition] = useState<TransitionState | null>(null)

  useEffect(() => {
    if (transition == null) {
      return
    }

    const timer = window.setTimeout(() => {
      setScreen(transition.to)
      setTransition(null)
    }, TRANSITION_DURATION_MS)

    return () => window.clearTimeout(timer)
  }, [transition])

  const navigate = useCallback(
    (to: ScreenId) => {
      if (transition != null || screen === to) {
        return
      }

      const kind = resolveTransition(screen, to)
      if (kind == null) {
        setScreen(to)
        return
      }

      setTransition({ from: screen, to, kind })
    },
    [screen, transition],
  )

  const goList = useCallback(() => navigate('list'), [navigate])
  const goInquiry = useCallback(() => navigate('inquiry'), [navigate])
  const goLoading = useCallback(() => navigate('loading'), [navigate])
  const goResults = useCallback(() => navigate('results'), [navigate])

  const activeScreen = transition?.to ?? screen
  const background = shellBackgroundFor(activeScreen)

  return (
    <AppShell background={background}>
      {transition != null ? (
        <ScreenStage
          key={`exit-${transition.from}`}
          role="exit"
          kind={transition.kind}
        >
          {renderScreen(transition.from, {
            goList,
            goInquiry,
            goLoading,
            goResults,
          })}
        </ScreenStage>
      ) : null}
      <ScreenStage
        key={activeScreen}
        role={transition != null ? 'enter' : 'idle'}
        kind={transition?.kind ?? null}
      >
        {renderScreen(activeScreen, {
          goList,
          goInquiry,
          goLoading,
          goResults,
        })}
      </ScreenStage>
    </AppShell>
  )
}

function renderScreen(id: ScreenId, nav: NavHandlers) {
  switch (id) {
    case 'list':
      return <PsychologistListScreen onStartMatching={nav.goInquiry} />
    case 'inquiry':
      return (
        <InquiryScreen onBack={nav.goList} onComplete={nav.goLoading} />
      )
    case 'loading':
      return <LoadingScreen onDone={nav.goResults} />
    case 'results':
      return (
        <ResultsScreen onBack={nav.goList} onFindAnother={nav.goList} />
      )
  }
}
