import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Chip.css'

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  icon?: ReactNode
}

export function Chip({ children, icon, className = '', ...rest }: ChipProps) {
  return (
    <button type="button" className={`ds-chip ${className}`.trim()} {...rest}>
      {icon ? <span className="ds-chip__icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}
