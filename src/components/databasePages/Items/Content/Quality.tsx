import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { uniqueId } from 'lodash'

type PropsType = {

}

const qualities = [1, 2, 3, 4, 5]

export const Quality: FC<PropsType> = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
      <Grid
          // xs={10}
        md={2}
        lg={2}
        sx={{ border: 'solid 1px blue' }}
      >
        Quality
      </Grid>
      <Grid
        container
          // xs={12}
        md={4}
        lg={10}
      >
        {qualities.map(q => (
          <Grid
            key={uniqueId()}
            xs={2}
            md={1}
            lg={1}
            sx={{ border: 'solid 1px green' }}
            className="whitespace-nowrap"
          >
            {q}
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Box>
)
