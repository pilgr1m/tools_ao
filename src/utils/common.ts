import { format } from 'fecha'
import { cloneDeep, isEqual } from 'lodash'

export const createPathIcon = (text: string) => `https://render.albiononline.com/v1/item/${text}`
export const generateDate = (time: string) => format(new Date(time), '[on] MM-DD-YYYY [at] HH:mm')

export const generateCapitalizeLabel = (label: string) => {
  const labelArr = label.split(' ')

  for (let i = 0; i < labelArr.length; i++) {
    labelArr[i] = labelArr[i][0].toUpperCase() + labelArr[i].substring(1)
  }

  const labelString = labelArr.join(' ')

  return labelString
}

export const generateLabel = (value: string | Record<string, any>[]) => {
  if (typeof (value) === 'string') return value

  const updatedValue = value.map(el => el.label).join(' ')

  return updatedValue
}

const sortFn = (a: Record<string, any>, b: Record<string, any>) => {
  if (a.sell_price_min < b.sell_price_min) return -1
  if (a.sell_price_min > b.sell_price_min) return 1

  return 0
}

const lowPriceByCity = (array: any[]) => {
  const arrayWithoutZeroPrice = array.filter(i => i.sell_price_min > 0)

  const result = arrayWithoutZeroPrice.filter((value: any) => {
    const sameCity = arrayWithoutZeroPrice.filter((el: any) => value.city === el.city)
    const sortedByPrice = sameCity.sort(sortFn)

    return isEqual(value, sortedByPrice[0])
  })

  return result
}

export const sortedItemsByTierAndGrade = (datas: any) => {
  const cloneData = cloneDeep(datas)

  if (cloneData) {
    let newDatas: any[] = []

    for (const element of cloneData) {
      const filteredItems = cloneData.filter((el:any) => element.item_id === el.item_id)
      const splicedByFilteredItems: any[] = cloneData.splice(0, filteredItems.length)

      const newItems = lowPriceByCity(splicedByFilteredItems)

      newDatas = [...newDatas, [...newItems]]
    }

    return newDatas
  }

  return cloneData
}
