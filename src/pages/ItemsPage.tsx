import React, { FC } from 'react'
import { ContentBox, Menu } from '../components'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

type Props = {

}

export const ItemsPage: FC<Props> = () => {
  const a = 1

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={24}>
        {/* menu */}
        <Grid xs={3} sx={{ border: 'solid 1px green' }}>
          <Menu />
        </Grid>

        {/* content */}
        <Grid xs={20} sx={{ border: 'solid 1px red', ml: 2 }}>
          <ContentBox />
        </Grid>
      </Grid>
    </Box>
  )
}
