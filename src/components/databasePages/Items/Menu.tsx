import React, { FC } from 'react'
import { uniqueId } from 'lodash'
import { subPagesItems } from '../../../data'
import { MenuItem } from './MenuItem'

type PropsType = {

}

export const Menu: FC<PropsType> = () => {
  const a = 1

  // TODO if open changing icon to RemoveIcon

  return (
    <>
      { subPagesItems.map(i => (
        <MenuItem key={uniqueId()} itemMenu={i} />
      ))}
    </>
  )
}
