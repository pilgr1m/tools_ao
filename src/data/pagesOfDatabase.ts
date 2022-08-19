import { pageType } from '../types'

const subPages = [
  'items',
  'mobs',
  'buildings',
  'labourers',
  'islands',
  'expeditions',
  'unlocked Equipment',
  'spells',
]

export const pages: pageType[] = [
  { name: 'home' },
  { name: 'calculation' },
  { name: 'database', subPages },
  { name: 'example_page' },
]
