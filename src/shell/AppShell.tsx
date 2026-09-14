import type { ReactNode } from 'react'
import { StatusBar } from './StatusBar'
import './AppShell.css'

type AppShellProps = {
  children: ReactNode
  background?: 'white' | 'mint'
}

export function AppShell({ children, background = 'white' }: AppShellProps) {
  return (
    <div className="app-page">
      <div
        className={`app-shell app-shell--${background}`}
        data-testid="app-shell"
      >
        <StatusBar />
        <div className="app-shell__body">{children}</div>
      </div>
    </div>
  )
}
