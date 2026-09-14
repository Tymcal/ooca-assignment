import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  as?: 'article' | 'div'
}

export function Card({
  children,
  as: Tag = 'article',
  className = '',
  ...rest
}: CardProps) {
  return (
    <Tag className={`ds-card ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
