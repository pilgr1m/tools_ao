import React, { FC, useEffect, useState } from 'react'
import { uniqueId } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { getBags } from '../../../../features'
import { ItemCard } from './ItemCard'
import { itemsURL } from '../../../../consts'

type Props = {
  url?: string
}

export const Content: FC<Props> = ({ url }) => {
  const dispatch = useDispatch()

  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const currUrl = url || itemsURL

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getBags(currUrl))
  }, [])

  const { isLoading, isError, items } = useSelector((state:any) => {
    console.log('state: ', state)

    return state.items
  })

  useEffect(() => {
    setLoading(isLoading)
    setError(isError)
    setData(items)
  }, [isLoading, isError, items])

  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1> Something went wrong..., please try reload the page</h1>

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
      {data && data.map((itemsByTier: any) =>
        <ItemCard key={uniqueId('key_')} items={itemsByTier} />)}
    </div>
  )
}
