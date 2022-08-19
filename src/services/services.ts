import axios from 'axios'
import { itemsType } from '../types'
import { urlCommonFarmableItems } from '../constants'

const instance = axios.create(
  { baseURL: 'https://www.albion-online-data.com/api/v2' },
)

export const getFarmableItems = async () => {
  let first100Items

  try {
    const response = await instance.get(urlCommonFarmableItems)

    // need response.data = {data}
    first100Items = response.data.filter((el: itemsType, idx:number) => idx < 100)

    // console.log('%c response.data: ', 'color: yellow', response.data)
    // console.log('%c first100Items: ', 'color: yellow', first100Items)
  } catch (error) {
    console.error(error)
  }

  return first100Items
}
