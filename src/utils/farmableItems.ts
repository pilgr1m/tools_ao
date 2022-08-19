import { itemsType } from '../types'

const itemsFiltered = (items: itemsType[], type: string) =>
  items.filter((item) => item?.item_id?.includes(type))

export const generateItemsByType = (items: itemsType[]) => {
  if (items.length === 0) return null

  // console.log('items: ', items)
  // 'Seed'
  const seedItems = itemsFiltered(items, 'SEED')
  const animalItems = itemsFiltered(items, 'BABY')
  const fishingItems = itemsFiltered(items, 'FISH')
  const potionItems = itemsFiltered(items, 'POTION')

  // console.log('seedItems: ', seedItems)
  const filteredItems = [
    { name: 'Seeds', items: [...seedItems] },
    { name: 'Animals', items: [...animalItems] },
    { name: 'Fishing', items: [...fishingItems] },
    { name: 'Potions', items: [...potionItems] },
  ]

  // console.log('filteredITEms: ', filteredItems)

  return filteredItems
}
