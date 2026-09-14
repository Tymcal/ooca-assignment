import profileListScreen from '../assets/illustrations/profile_list_screen.svg'
import loadingScreen from '../assets/illustrations/loading_screen.svg'
import resultScreen from '../assets/illustrations/result_screen.svg'

type MookaVariant = 'coins' | 'phone' | 'friends'

type MookaProps = {
  variant?: MookaVariant
  className?: string
}

const VARIANT_SRC: Record<MookaVariant, string> = {
  coins: profileListScreen,
  phone: loadingScreen,
  friends: resultScreen,
}

const VARIANT_SIZE: Record<MookaVariant, { width: number; height: number }> = {
  coins: { width: 100, height: 78 },
  phone: { width: 160, height: 124 },
  friends: { width: 200, height: 166 },
}

export function MookaIllustration({
  variant = 'coins',
  className = '',
}: MookaProps) {
  const size = VARIANT_SIZE[variant]

  return (
    <img
      className={className}
      src={VARIANT_SRC[variant]}
      width={size.width}
      height={size.height}
      alt=""
      aria-hidden
      draggable={false}
    />
  )
}
