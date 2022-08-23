import React, { FC } from 'react'
import { uniqueId } from 'lodash'
import Box from '@mui/material/Box'
import { subPagesItems } from '../../../data'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Link } from '@mui/material'

type PropsType = {

}

export const MenuPageItems: FC<PropsType> = () => {
  const a = 1

  // TODO if open changing icon to RemoveIcon

  return (
    <>
      { subPagesItems.map(i => (
        <Box
          key={uniqueId()}
          sx={{ fontSize: 13, mt: 1, whiteSpace: 'nowrap' }}
        >
          <span><AddIcon fontSize="small" color="action" /></span>
          <Link href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md ">
            {i.name.toUpperCase()}
          </Link>

        </Box>
      ))}
    </>
  )
}
