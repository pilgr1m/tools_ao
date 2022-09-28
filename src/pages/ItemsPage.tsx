import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { ItemsLayout } from '../components'
// import { getFarmableItems } from '../services'
import { itemsType } from '../types'
import { useDispatch, useSelector } from 'react-redux'

type Props = {

}

export const ItemsPage: FC<Props> = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<itemsType[] | []>([])

  const { isLoading, isError, items } = useSelector((state:any) => {
    console.log('state: ', state)

    return state.items
  })

  return (
    <ItemsLayout />
  )
}
