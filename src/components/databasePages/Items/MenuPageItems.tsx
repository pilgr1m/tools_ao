import React, { FC } from 'react'
import { uniqueId } from 'lodash'
import Box from '@mui/material/Box'
import { subPagesItems } from '../../../data'

type PropsType = {

}

export const MenuPageItems: FC<PropsType> = () => {
  const a = 1

  return (
    <>
      { subPagesItems.map(i => (
        <Box
          key={uniqueId()}
          sx={{ fontSize: 14 }}
        >
          {i.name.toUpperCase()}
        </Box>
      ))}
    </>
  )
}
