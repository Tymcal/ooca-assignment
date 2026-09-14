import './Tag.css'

type TagVariant = 'yellow' | 'blue' | 'orange'

type TagProps = {
  label: string
  variant?: TagVariant
}

export function Tag({ label, variant = 'blue' }: TagProps) {
  return <span className={`ds-tag ds-tag--${variant}`}>{label}</span>
}
