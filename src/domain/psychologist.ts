export type TagVariant = 'yellow' | 'blue' | 'orange'

export type SpecialtyTag = {
  label: string
  variant: TagVariant
}

export type Psychologist = {
  id: string
  name: string
  role: string
  rating?: number
  priceBaht: number
  durationMinutes: number
  avatarUrl: string
  tags: SpecialtyTag[]
}
