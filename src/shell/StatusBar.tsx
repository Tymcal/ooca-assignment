import './StatusBar.css'

export function StatusBar() {
  return (
    <header className="status-bar" aria-hidden="true">
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__island" />
      <div className="status-bar__icons">
        <CellularIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </header>
  )
}

function CellularIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
      <rect x="0" y="7" width="3" height="5" rx="0.5" />
      <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
      <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" />
      <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path
        d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        fill="currentColor"
      />
      <path
        d="M4.2 7.2a5.5 5.5 0 0 1 7.6 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M1.5 4.4a9 9 0 0 1 13 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="11"
        rx="2.5"
        stroke="currentColor"
        opacity="0.35"
      />
      <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
      <path
        d="M23 4v4a2 2 0 0 0 0-4Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  )
}
