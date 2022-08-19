import React, { FC, useEffect } from 'react'
import { TableItems } from './TableItems'
import { Link } from '@mui/material'

type Props = {
  requestFarmableItems: ()=> void
  itemsData: any
}

export const Items: FC<Props> = ({
  itemsData,
  requestFarmableItems,
}) => {
  useEffect(() => {
    requestFarmableItems()
  }, [])
  const a = 1

  return (
    <div className="flex flex-col justify-center text-3xl font-bold text-gray-700">
      <div>Farmable Items</div>
      <div className="text-xs text-gray-400">( Seed, Animal, Fishing, Potion ) </div>
      <span className="text-xs text-gray-400">
        <span>Prices are provided by the </span>
        <Link href="https://www.albion-online-data.com/" underline="hover">
          Albion Online Data Project
        </Link>
      </span>
      {/* table items */}
      <TableItems itemsData={itemsData} />
    </div>
  )
}
