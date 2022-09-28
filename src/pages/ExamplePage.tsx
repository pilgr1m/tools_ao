import React, { FC, useEffect, useState } from 'react'
import { ItemCard } from '../components'
import { uniqueId } from 'lodash'
import { Link } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getBags } from '../features'

type Props = {

}

export const ExamplePage: FC<Props> = () => {
  const dispatch = useDispatch()

  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getBags())
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

  // const urlForIcon = 'https://render.albiononline.com/v1/item/T4_OFF_SHIELD.png'

  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1>something went wrong</h1>

  return (
    <>
      <span>Prices are provided by the </span>
      <Link href="https://www.albion-online-data.com/" underline="hover">
        Albion Online Data Project
      </Link>

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
    </>
  )
}
