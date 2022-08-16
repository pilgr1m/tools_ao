import React, { FC, useEffect } from 'react'
import { TableItems } from './TableItems'

type Props = {
  requestFarmableItems: ()=> void
  itemsData: any
}

export const Items: FC<Props> = ({
  itemsData,
  requestFarmableItems,
}) => {
  useEffect(() => {
    console.log('useEff []')
    requestFarmableItems()
  }, [])
  const a = 1

  return (
    <div className="flex flex-col justify-center text-3xl font-bold text-gray-700">
      <div>Farmable Items</div>
      <div className="text-xs text-gray-400">( Seed, Animal, Fishing, Potion ) </div>

      {/* table items */}
      <TableItems itemsData={itemsData} />
    </div>
  )
}
