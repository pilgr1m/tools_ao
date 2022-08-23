import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { ItemsLayout } from '../components'
import { getFarmableItems } from '../services'
import { itemsType } from '../types'
import { useDispatch } from 'react-redux'
import { setFarmableItems } from '../features'

type Props = {

}

export const ItemsPage: FC<Props> = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<itemsType[] | []>([])
  const memoizedData = useMemo(() => data, [data])

  const requestFarmableItems = useCallback(async () => {
    try {
      const items: itemsType[] = await getFarmableItems()

      setData(items)
    } catch (e: any) {
      console.log('error: ', e?.message)
    }
  }, [])

  useEffect(() => {
    dispatch(setFarmableItems(data))
  }, [data, dispatch])

  return (
    // <Items
    //   requestFarmableItems={requestFarmableItems}
    //   itemsData={memoizedData}
    // />
    <ItemsLayout />
  )
}
