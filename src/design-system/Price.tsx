import './Price.css'

type PriceProps = {
  amount: number
  durationMinutes?: number
}

export function Price({ amount, durationMinutes = 30 }: PriceProps) {
  const formatted = amount.toLocaleString('th-TH')
  return (
    <span className="ds-price">
      <PriceTagIcon />
      <span>
        {formatted} บาท / {durationMinutes} นาที
      </span>
    </span>
  )
}

function PriceTagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2.5 8.2 8.2 2.5a1.2 1.2 0 0 1 .85-.35H13a1 1 0 0 1 1 1v3.95c0 .32-.13.62-.35.85L8.2 13.5a1.2 1.2 0 0 1-1.7 0L2.5 9.5a1.2 1.2 0 0 1 0-1.3Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="11" cy="5" r="1" fill="currentColor" />
    </svg>
  )
}
