import './Avatar.css'

type AvatarProps = {
  src: string
  alt: string
  size?: number
}

export function Avatar({ src, alt, size = 64 }: AvatarProps) {
  return (
    <img
      className="ds-avatar"
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  )
}
