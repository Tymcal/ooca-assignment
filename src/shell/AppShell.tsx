import type { ReactNode } from 'react'
import './AppShell.css'

type AppShellProps = {
  children: ReactNode
  background?: 'white' | 'mint' | 'turquoise'
}

export function AppShell({ children, background = 'white' }: AppShellProps) {
  return (
    <div className="app-page">
      <div
        className={`app-shell app-shell--${background}`}
        data-testid="app-shell"
      >
        <div className="app-shell__body">{children}</div>
      </div>
    </div>
  )
}
