import type { Psychologist } from './psychologist'

export const listPsychologists: Psychologist[] = [
  {
    id: '1',
    name: 'นาย ภณวรรธน์ ปั้นประดับ',
    role: 'นักจิตวิทยาคลินิก',
    rating: 4.9,
    priceBaht: 500,
    durationMinutes: 30,
    avatarUrl: 'https://i.pravatar.cc/128?img=12',
    tags: [
      { label: 'ปัญหาความเครียด', variant: 'yellow' },
      { label: 'ซึมเศร้า', variant: 'blue' },
    ],
  },
  {
    id: '2',
    name: 'พญ. กมลชนก วุฒิธำรง',
    role: 'จิตแพทย์ทั่วไป',
    rating: 4.8,
    priceBaht: 3000,
    durationMinutes: 30,
    avatarUrl: 'https://i.pravatar.cc/128?img=47',
    tags: [
      { label: 'วิตกกังวล', variant: 'yellow' },
      { label: 'ความสัมพันธ์', variant: 'orange' },
      { label: 'นอนไม่หลับ', variant: 'blue' },
    ],
  },
  {
    id: '3',
    name: 'น.ส. ขวัญทิพย์ ปทุมธนรักษ์',
    role: 'นักจิตวิทยาคลินิก',
    rating: 4.7,
    priceBaht: 750,
    durationMinutes: 30,
    avatarUrl: 'https://i.pravatar.cc/128?img=32',
    tags: [
      { label: 'ปัญหาความเครียด', variant: 'yellow' },
      { label: 'ครอบครัว', variant: 'blue' },
    ],
  },
]

export const matchedPsychologists: Psychologist[] = [
  {
    id: 'm1',
    name: 'น.ส. ลักษณ์พร ภาณุเกษมสิน',
    role: 'นักจิตวิทยาคลินิก',
    rating: 4.8,
    priceBaht: 650,
    durationMinutes: 30,
    avatarUrl: 'https://i.pravatar.cc/128?img=5',
    tags: [],
  },
  {
    id: 'm2',
    name: 'น.ส. ขวัญทิพย์ ปทุมธนรักษ์',
    role: 'นักจิตวิทยาคลินิก',
    rating: 4.7,
    priceBaht: 750,
    durationMinutes: 30,
    avatarUrl: 'https://i.pravatar.cc/128?img=32',
    tags: [],
  },
  {
    id: 'm3',
    name: 'พญ. ภาณุวนาพร ชัยคำนันทะ',
    role: 'จิตแพทย์ทั่วไป',
    rating: 4.9,
    priceBaht: 1120,
    durationMinutes: 30,
    avatarUrl: 'https://i.pravatar.cc/128?img=20',
    tags: [],
  },
]
