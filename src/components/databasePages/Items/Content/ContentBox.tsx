import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { Content } from './Content'
import { Link } from '@mui/material'
import { Quality } from './Quality'
import { Tiers } from './Tiers'

export const ContentBox: FC<any> = () => {
  const a = 1

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={16}>

        {/* Header content  */}
        <Grid xs={16} sx={{ border: 'solid 1px green' }}>
          <Box sx={{ border: 'solid 1px green', fontSize: 13 }}>
            *Prices are provided by the
            <Link href="https://www.albion-online-data.com/" underline="hover" sx={{ ml: 0.6 }}>
              Albion Online Data Project
            </Link>
          </Box>
          <Tiers />
          <Quality />
        </Grid>

        {/* Content */}
        <Grid xs={16} sx={{ border: 'solid 1px yellow', ml: 2, mt: 2 }}>
          <Content />
        </Grid>

      </Grid>
    </Box>
  )
}
