import { useCallback, useState } from 'react'
import { InquiryScreen } from '../screens/InquiryScreen'
import { LoadingScreen } from '../screens/LoadingScreen'
import { PsychologistListScreen } from '../screens/PsychologistListScreen'
import { ResultsScreen } from '../screens/ResultsScreen'
import { AppShell } from './AppShell'

export type ScreenId = 'list' | 'inquiry' | 'loading' | 'results'

export function ScreenRouter() {
  const [screen, setScreen] = useState<ScreenId>('list')

  const goList = useCallback(() => setScreen('list'), [])
  const goInquiry = useCallback(() => setScreen('inquiry'), [])
  const goLoading = useCallback(() => setScreen('loading'), [])
  const goResults = useCallback(() => setScreen('results'), [])

  const background = screen === 'loading' || screen === 'results' ? 'mint' : 'white'

  return (
    <AppShell background={background}>
      {screen === 'list' ? (
        <PsychologistListScreen onStartMatching={goInquiry} />
      ) : null}
      {screen === 'inquiry' ? (
        <InquiryScreen onBack={goList} onComplete={goLoading} />
      ) : null}
      {screen === 'loading' ? <LoadingScreen onDone={goResults} /> : null}
      {screen === 'results' ? (
        <ResultsScreen onBack={goList} onFindAnother={goList} />
      ) : null}
    </AppShell>
  )
}
