import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { uniqueId } from 'lodash'

type PropsType = {

}

const tiers = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8']

export const Tiers: FC<PropsType> = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
      <Grid
        // xs={10}
        md={2}
        lg={2}
        sx={{ border: 'solid 1px blue' }}
      >
        All tiers
      </Grid>
      <Grid
        container
          // xs={12}
        md={8}
        lg={8}
      >
        {tiers.map(t => (
          <Grid
            key={uniqueId()}
            xs={2}
            md={1}
            lg={1}
            sx={{ border: 'solid 1px green' }}
            className="whitespace-nowrap"
          >
            {t}
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Box>
)
