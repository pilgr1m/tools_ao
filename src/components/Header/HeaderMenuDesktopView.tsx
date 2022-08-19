import React, { FC } from 'react'
import { ButtonMenu } from './ButtonMenu'
import Box from '@mui/material/Box'
import { uniqueId } from 'lodash'
import { pageType } from '../../types'

type Props = {
  pages: pageType[],
  handleCloseNavMenu: ()=> void,
}

export const HeaderMenuDesktopView: FC<Props> = ({ pages }) => {
  const a = 1

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => <ButtonMenu key={uniqueId()} page={page} />)}
      </Box>
    </>
  )
}
