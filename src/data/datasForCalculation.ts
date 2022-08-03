import { pricesType, runeByItemType } from '../types'

export const runesByItem: runeByItemType[] = [
  { value: 48, label: 'Голова/Ноги/Плащ/ЛіваРука' },
  { value: 96, label: 'Сумка/Тіло' },
  { value: 144, label: 'ОдноручнаЗброя' },
  { value: 192, label: 'ДвуручнаЗброя' },
]

export const prices: pricesType[] = [
  { name: 'premium', id: 'premium', label: 'Premium', premium: true },
  { name: 'priceNormalItem', id: 'priceNormalItem', label: 'Ціна НЕзачарованого предмету' },
  { name: 'priceUpgradeItem', id: 'priceUpgradeItem', label: 'Ціна зачарованого предмету' },
  { name: 'priceOneRune', id: 'priceOneRune', label: 'Ціна 1руни/душі/реліка' },
  { name: 'countRunes', id: 'countRunes', label: 'Кількість рун для зачарування', data: runesByItem },
]
