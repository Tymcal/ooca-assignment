import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'sm'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`ds-button ds-button--${variant} ds-button--${size} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}
