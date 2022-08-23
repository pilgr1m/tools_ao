import React, { FC } from 'react'
import { uniqueId } from 'lodash'
import Box from '@mui/material/Box'

type PropsType = {

}

const arr = [
  'MenuItem', 'MenuItem', 'MenuItem',
  'MenuItem', 'MenuItem', 'MenuItem',
  'MenuItem', 'MenuItem', 'Gathering Gear',
]

export const MenuPageItems: FC<PropsType> = () => {
  const a = 1

  return (
    <>
      { arr.map(i => (
        <Box
          key={uniqueId()}
          sx={{ fontSize: 14 }}
        >
          {i}
        </Box>
      ))}
    </>
  )
}
