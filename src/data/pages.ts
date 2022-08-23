import { pageType } from '../types'

const subPagesDatabase = [
  'items',
  'mobs',
  'buildings',
  'labourers',
  'islands',
  'expeditions',
  'unlocked_equipment',
  'spells',
]

export const pages: pageType[] = [
  { name: 'home' },
  { name: 'calculation' },
  { name: 'database', subPagesDatabase },
  { name: 'example_page' },
]

export const subPagesItems = [
  'accessories',
  'armor',
  'artifact',
  'city_resources',
  'consumable',
  'farmable',
  'furniture',
  'gathering_gear',
  'luxury_goods',
  'magic',
  'materials',
  'melee',
  'mount',
  'off_hand',
  'other',
  'product',
  'ranged',
  'resource',
  'tomes',
  'token',
  'tool',
  'trophies',
]
