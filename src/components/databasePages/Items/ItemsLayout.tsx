import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { Menu } from './Menu'
import { ContentItemsPageContainer } from './ContentItemsPageContainer'

type PropsType = {

}

export const ItemsLayout: FC<PropsType> = () => {
  const a = 1

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={24}>
        <Grid xs={3} sx={{ border: 'solid 1px green' }}>
          <Menu />
        </Grid>
        <Grid xs={20} sx={{ border: 'solid 1px red', ml: 2 }}>
          <ContentItemsPageContainer />
        </Grid>
      </Grid>
    </Box>
  )
}
