import React, { FC, useEffect, useState } from 'react'
// import { accessoriesService, useFetch, useHttp } from '../services'
import axios from 'axios'
import { ItemCard } from '../components'
import { cloneDeep, uniqueId } from 'lodash'

type Props = {

}

export const ExamplePage: FC<Props> = () => {
  const a = 1

  // const baseURL = 'https://www.albion-online-data.com/api/v2'

  const axiosOptions = {
    // baseURL,
    timeout: 1000,
    headers: {
      contentType: 'application/json',
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Origin': true,
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    mode: 'cors',
  }
  const instance = axios.create(axiosOptions)

  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Record<string, any> | null>(null)

  const url = 'https://www.albion-online-data.com/api/v1/stats/prices/T2_CAPE,T3_CAPE,T4_CAPE,T4_CAPE@1,T4_CAPE@2,T4_CAPE@3'

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        // loader on
        const response = await instance.get(url)

        // if status OK(200) loader off
        // console.log(response.data)
        setData(response.data)
      } catch (err: any) {
        setError(err)
        // if is error - loader on
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  // const urlTEST = '/stats/prices/T2_BAG,T3_BAG,T4_BAG'
  // const urlTEST222 = '/stats/history/T4_BAG?time-scale=24'
  // const urlTEST333 = 'https://render.albiononline.com/v1/item/T4_OFF_SHIELD.png'
  //
  // // const { data, loading, error } = useFetch(bagsURL)
  // const { data, loading, error } = useFetch(urlTEST333)

  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1>something went wrong</h1>

  const sortedItemsByTierAndGrade = (datas: any) => {
    const cloneData = cloneDeep(datas)

    if (cloneData) {
      let newDataArr: any[] = []

      for (const element of cloneData) {
        const byFilter = cloneData.filter((el:any) => element.item_id === el.item_id)

        const newSubArr: any[] = cloneData.splice(0, byFilter.length)

        newDataArr = [...newDataArr, [...newSubArr]]
      }

      return newDataArr
    }

    return cloneData
  }

  const newData = sortedItemsByTierAndGrade(data)

  console.log('data:_+_+_+', data)
  console.log('newData: ', newData)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      // alignContent: 'center',
    }}
    >
      {newData && newData.map((itemsByTier: any) =>
        <ItemCard key={uniqueId('key_')} items={itemsByTier} />)}
    </div>
  )
}
