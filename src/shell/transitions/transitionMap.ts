export type ScreenId = 'list' | 'inquiry' | 'loading' | 'results'

export type TransitionKind = 'move-in' | 'move-out' | 'dissolve'

const EDGE_TRANSITIONS: Record<string, TransitionKind> = {
  'list->inquiry': 'move-in',
  'inquiry->loading': 'dissolve',
  'loading->results': 'dissolve',
  'inquiry->list': 'move-out',
  'results->list': 'move-out',
}

export function resolveTransition(
  from: ScreenId,
  to: ScreenId,
): TransitionKind | null {
  if (from === to) {
    return null
  }
  return EDGE_TRANSITIONS[`${from}->${to}`] ?? 'dissolve'
}

export const TRANSITION_DURATION_MS = 300

export function shellBackgroundFor(
  screen: ScreenId,
): 'white' | 'mint' | 'turquoise' {
  if (screen === 'inquiry') {
    return 'turquoise'
  }
  return screen === 'loading' || screen === 'results' ? 'mint' : 'white'
}
