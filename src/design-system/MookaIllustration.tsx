type MookaProps = {
  variant?: 'coins' | 'phone' | 'friends'
  className?: string
}

export function MookaIllustration({
  variant = 'coins',
  className = '',
}: MookaProps) {
  if (variant === 'phone') {
    return (
      <svg
        className={className}
        width="160"
        height="140"
        viewBox="0 0 160 140"
        fill="none"
        aria-hidden
      >
        <ellipse cx="80" cy="78" rx="52" ry="38" fill="#fff" />
        <ellipse cx="52" cy="62" rx="22" ry="20" fill="#fff" />
        <ellipse cx="108" cy="62" rx="22" ry="20" fill="#fff" />
        <circle cx="62" cy="70" r="4" fill="#1f2937" />
        <circle cx="98" cy="70" r="4" fill="#1f2937" />
        <path
          d="M70 84c4 5 16 5 20 0"
          stroke="#1f2937"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="68" y="48" width="24" height="36" rx="4" fill="#14b8a6" />
        <rect x="71" y="52" width="18" height="24" rx="2" fill="#ecfeff" />
        <circle cx="36" cy="40" r="6" fill="#a5f3fc" opacity="0.8" />
        <rect x="120" y="36" width="14" height="10" rx="2" fill="#fde68a" />
        <circle cx="128" cy="100" r="5" fill="#fda4af" opacity="0.7" />
      </svg>
    )
  }

  if (variant === 'friends') {
    return (
      <svg
        className={className}
        width="200"
        height="130"
        viewBox="0 0 200 130"
        fill="none"
        aria-hidden
      >
        <ellipse cx="70" cy="78" rx="48" ry="36" fill="#fff" />
        <ellipse cx="44" cy="62" rx="20" ry="18" fill="#fff" />
        <ellipse cx="96" cy="62" rx="20" ry="18" fill="#fff" />
        <circle cx="56" cy="70" r="3.5" fill="#1f2937" />
        <circle cx="84" cy="70" r="3.5" fill="#1f2937" />
        <path
          d="M62 82c3 4 12 4 16 0"
          stroke="#1f2937"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="140" cy="70" r="36" fill="#fbbf24" />
        <circle cx="128" cy="64" r="3.5" fill="#1f2937" />
        <circle cx="152" cy="64" r="3.5" fill="#1f2937" />
        <path
          d="M132 78c4 5 12 5 16 0"
          stroke="#1f2937"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M108 88c8 10 20 10 28 2"
          stroke="#14b8a6"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      width="100"
      height="90"
      viewBox="0 0 100 90"
      fill="none"
      aria-hidden
    >
      <ellipse cx="50" cy="52" rx="36" ry="28" fill="#fff" />
      <ellipse cx="30" cy="40" rx="16" ry="14" fill="#fff" />
      <ellipse cx="70" cy="40" rx="16" ry="14" fill="#fff" />
      <circle cx="38" cy="48" r="3" fill="#1f2937" />
      <circle cx="62" cy="48" r="3" fill="#1f2937" />
      <path
        d="M44 58c2.5 3 9 3 12 0"
        stroke="#1f2937"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="72" cy="68" rx="12" ry="10" fill="#fbbf24" />
      <circle cx="72" cy="66" r="3" fill="#f59e0b" />
    </svg>
  )
}
